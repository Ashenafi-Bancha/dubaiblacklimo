/** Strips a displayed phone number ("+971 4 000 0000") down to its digits. */
function digits(phone: string): string {
  return phone.replace(/\D/g, '');
}

/** Click-to-call link for a displayed phone number. */
export function telHref(phone: string): string {
  return `tel:+${digits(phone)}`;
}

/** Opens a WhatsApp chat with the business, optionally with a pre-written message. */
export function whatsappHref(number: string, message?: string): string {
  const base = `https://wa.me/${digits(number)}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailHref(email: string): string {
  return `mailto:${email}`;
}
