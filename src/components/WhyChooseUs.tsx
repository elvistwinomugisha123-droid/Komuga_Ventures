import { TRUST_PILLARS } from "@/lib/constants";

const pillarIcons: Record<string, React.ReactNode> = {
  check: (
    <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  handshake: (
    <svg className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 11l4-4 4 4m-8 4l4-4 4 4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
    </svg>
  ),
  growth: (
    <svg className="h-10 w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

export default function WhyChooseUs() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Why Choose Komuga?
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div className="mb-4">
                {pillarIcons[pillar.emoji] ?? pillarIcons.check}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
