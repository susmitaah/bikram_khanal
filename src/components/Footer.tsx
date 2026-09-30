import { nav, site, socials } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { FacebookIcon } from "@/components/ui/SocialIcons";

const socialIcons = { facebook: FacebookIcon };

export function Footer() {
  return (
    <footer className="bg-navy pt-16 text-cream/75">
      <Container className="flex flex-col gap-10 pb-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="font-display text-2xl font-semibold text-cream">
            {site.honorific} {site.name} <span className="font-devanagari text-gold/80">बिक्रम खनाल</span>
          </p>
          <p className="mt-1.5 max-w-sm text-sm">{site.designation}</p>

          <div className="mt-6 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-full border border-cream/20 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
          <a href="#home" className="link-underline transition-colors hover:text-cream">
            Home
          </a>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-underline transition-colors hover:text-cream">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>

      <div className="border-t border-rule-on-navy py-6">
        <Container className="flex flex-col items-center gap-4 text-xs text-cream/50 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          {/* subtle Nepali-inspired geometric border pattern */}
          <svg aria-hidden viewBox="0 0 240 12" className="h-3 w-40 text-gold/40">
            <path
              d="M0 6h20l4-6 4 6 4-6 4 6h20l4-6 4 6 4-6 4 6h20l4-6 4 6 4-6 4 6h20l4-6 4 6 4-6 4 6h20l4-6 4 6 4-6 4 6h20l4-6 4 6 4-6 4 6h20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        </Container>
      </div>
    </footer>
  );
}
