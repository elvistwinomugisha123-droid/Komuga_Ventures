import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-white/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:text-left">
        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          {COMPANY.tagline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 md:mx-0">
          {COMPANY.description} We partner with visionary entrepreneurs and
          enterprises to create lasting value and drive economic transformation.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
          <Link
            href="/services"
            className="rounded-lg bg-amber-500 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-amber-600"
          >
            Our Services
          </Link>
          <Link
            href="/#contact"
            className="rounded-lg border-2 border-white/30 px-8 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
