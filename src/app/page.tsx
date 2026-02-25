import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import CtaBanner from "@/components/CtaBanner";
import { SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
            Everything your business needs — from financial services to
            connectivity — all in one place.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <CtaBanner />
    </>
  );
}
