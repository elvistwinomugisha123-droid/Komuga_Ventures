import { HIGHLIGHTS } from "@/lib/constants";

export default function Highlights() {
  return (
    <section className="bg-blue-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Our Impact in Numbers
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-4xl font-bold text-amber-500 md:text-5xl">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-medium text-slate-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
