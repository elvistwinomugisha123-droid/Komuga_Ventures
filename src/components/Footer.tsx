import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white">{COMPANY.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-blue-200">
              {COMPANY.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-200 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-blue-200">
              <li>{COMPANY.email}</li>
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-blue-800 pt-6 text-center text-sm text-blue-300">
          &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
