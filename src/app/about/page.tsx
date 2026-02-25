import Image from "next/image";
import { COMPANY, CEO, TESTIMONIALS } from "@/lib/constants";

export const metadata = {
  title: "About & Contact | Komuga Ventures",
  description:
    "Learn about Komuga Limited Ventures, meet CEO Mugabe Rodgers, and get in touch. Located in Bukoto, Kampala, Uganda.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            About Komuga
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Your trusted partner in Bukoto, Kampala — delivering financial
            services and business solutions with integrity.
          </p>
        </div>
      </section>

      {/* Section 1: About Komuga */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                Our Story
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                {COMPANY.description}
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Founded in Bukoto, Kampala, Komuga Limited Ventures is fully
                registered with the Uganda Registration Services Bureau (URSB)
                and the Uganda Revenue Authority (URA). We have been identified
                as a high-growth business, earning the trust of our community
                through honest, no-hidden-fee service delivery.
              </p>
              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-800">
                  Our Mission
                </h3>
                <p className="mt-2 text-slate-700">{COMPANY.mission}</p>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative h-80 w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <svg
                    className="h-20 w-20 text-blue-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5M3.75 3v18m4.5-18v18m4.5-18v18m4.5-18v18M5.25 6h1.5m-1.5 3h1.5m-1.5 3h1.5m4.5-6h1.5m-1.5 3h1.5m-1.5 3h1.5m4.5-6h1.5m-1.5 3h1.5m-1.5 3h1.5"
                    />
                  </svg>
                  <p className="mt-4 text-sm text-blue-400">
                    Professional business setting — Bukoto, Kampala
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Meet the CEO */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Meet the CEO
          </h2>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-blue-100">
                <Image
                  src="/images/ceo.svg"
                  alt={CEO.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {CEO.name}
                </h3>
                <p className="text-sm text-blue-700">{CEO.title}</p>
                <div className="mt-4 space-y-1 text-sm text-slate-600">
                  <p>{CEO.phone} (WhatsApp & Call)</p>
                  <p>{CEO.phoneAlt}</p>
                </div>
                <div className="mt-4 flex gap-3">
                  <a
                    href={`https://wa.me/${CEO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                  <a
                    href={`tel:${CEO.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Contact & Find Us */}
      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Contact & Find Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Visit our office in Bukoto, Kampala or reach out through any of the
            channels below.
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* Map */}
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title="Komuga Ventures Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7578726853283!2d32.5931!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBukoto%2C+Kampala!5e0!3m2!1sen!2sug!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Details */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-bold text-slate-900">Location</h3>
                <p className="mt-1 text-sm text-slate-600">
                  {COMPANY.address}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call Now
                </a>
                <a
                  href={COMPANY.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Social Proof / Testimonials */}
      <section className="bg-blue-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <svg
                  className="h-8 w-8 text-blue-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                </svg>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="text-sm font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Facebook Follow */}
          <div className="mt-10 text-center">
            <a
              href={COMPANY.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow Komuga on Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
