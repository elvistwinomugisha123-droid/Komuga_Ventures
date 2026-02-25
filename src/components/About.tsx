export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Who We Are
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Komuga Ventures Limited is a diversified investment firm
              headquartered in Kigali, Rwanda. With over a decade of experience,
              we identify and nurture high-potential opportunities across
              private equity, real estate, agribusiness, technology, and energy.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our approach combines deep local expertise with global best
              practices to deliver sustainable returns while contributing to
              economic growth and community development across the region.
            </p>
          </div>

          {/* Decorative element */}
          <div className="flex items-center justify-center">
            <div className="relative h-72 w-72">
              <div className="absolute inset-0 rounded-2xl bg-blue-100" />
              <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-2xl bg-blue-700/20" />
              <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
                <svg
                  className="h-24 w-24 text-blue-700"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
