import { site } from "@/content/site";

export const offices: Array<{
  name: string;
  address: string;
  phone?: string;
  email?: string;
  hours?: string;
}> = [
  {
    name: "Constituency Office",
    address: "Bardaghat Municipality, Nawalparasi (Bardaghat Susta West)",
    phone: site.contact.phone,
    email: site.contact.email,
    hours: "Sunday – Friday, 10:00 AM – 4:00 PM",
  },
  {
    name: "Parliamentary Office",
    address: "Federal Parliament Secretariat, Singha Durbar, Kathmandu",
    email: site.contact.email,
  },
];

export const contactCopy = {
  title: "Let's work together",
  intro: "Have a question, suggestion or concern? I'd love to hear from you.",
  form: {
    name: "Full Name",
    email: "Email Address",
    subject: "Subject",
    message: "Message",
    submit: "Send Message",
    sending: "Sending…",
    success: "Thank you — your message has been sent.",
    error: "Something went wrong. Please try again, or reach out directly.",
    errors: {
      invalid_name: "Please enter your full name (at least 2 characters).",
      invalid_email: "Please enter a valid email address.",
      invalid_message: "Message is too short — please write at least 10 characters.",
      message_too_long: "Message is too long.",
      rate_limited: "Too many attempts — please wait a moment and try again.",
    } as Record<string, string>,
  },
};
