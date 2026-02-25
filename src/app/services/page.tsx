import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Our Services | Komuga Ventures",
  description:
    "Explore Komuga Ventures' services across private equity, real estate, agribusiness, technology, financial advisory, and energy infrastructure.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            We offer a comprehensive suite of investment and advisory services
            tailored to drive sustainable growth across emerging markets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Let&apos;s discuss how Komuga Ventures can help you achieve your
            investment goals and create lasting impact.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-block rounded-lg bg-blue-700 px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
