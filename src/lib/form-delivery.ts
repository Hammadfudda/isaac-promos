const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

type EmailTemplateParams = Record<string, string>;

function requireEnv(name: string, value: string | undefined) {
  if (!value) {
    throw new Error(`Missing ${name}. Add it to your .env file and restart the dev server.`);
  }
  return value;
}

export async function uploadToCloudinary(file: File): Promise<string> {
  const cloudName = requireEnv(
    "VITE_CLOUDINARY_CLOUD_NAME",
    import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  );
  const uploadPreset = requireEnv(
    "VITE_CLOUDINARY_UPLOAD_PRESET",
    import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
  );

  const body = new FormData();
  body.append("file", file);
  body.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    {
      method: "POST",
      body,
    },
  );

  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload?.secure_url) {
    const cloudinaryMessage =
      payload?.error?.message || "Cloudinary could not upload the selected file.";
    throw new Error(cloudinaryMessage);
  }

  return payload.secure_url as string;
}

export async function sendEmailJs(
  templateId: string | undefined,
  templateParams: EmailTemplateParams,
): Promise<void> {
  const serviceId = requireEnv(
    "VITE_EMAILJS_SERVICE_ID",
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
  );
  const publicKey = requireEnv(
    "VITE_EMAILJS_PUBLIC_KEY",
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
  const resolvedTemplateId = requireEnv("EmailJS template ID", templateId);

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: resolvedTemplateId,
      user_id: publicKey,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const detail = (await response.text().catch(() => "")).trim();
    throw new Error(
      detail
        ? `EmailJS could not send the form: ${detail}`
        : "EmailJS could not send the form. Please try again.",
    );
  }
}

export function validateUpload(file: File | null): string | null {
  if (!file) return null;

  const maxBytes = 10 * 1024 * 1024;
  if (file.size > maxBytes) {
    return "Please upload a file smaller than 10 MB.";
  }

  const allowedExtensions = [
    "png",
    "jpg",
    "jpeg",
    "webp",
    "pdf",
    "svg",
    "eps",
    "ai",
  ];

  const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!allowedExtensions.includes(extension)) {
    return "Use PNG, JPG, WEBP, PDF, SVG, EPS or AI.";
  }

  return null;
}
