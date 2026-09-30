export const site = {
  name: "Bikram Khanal",
  honorific: "Hon.",
  designation: "Member, House of Representatives — Nawalparasi-1",
  party: "Rastriya Swatantra Party",
  constituency: "Nawalparasi-1 (Bardaghat Susta West)",

  contact: {
    email: "bikkhanal@gmail.com",
    phone: "+977-9857080310",
    facebook: "https://www.facebook.com/BikramkhanalCAmember/",
  },
};

/** Only real, verified accounts are listed — no placeholder social links. */
export const socials: Array<{ label: string; href: string; icon: "facebook" }> = [
  { label: "Facebook", href: site.contact.facebook, icon: "facebook" },
];

export const nav: Array<{ href: string; label: string }> = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#priorities", label: "Priorities" },
  { href: "#journey", label: "Journey" },
  { href: "#news", label: "News" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];
