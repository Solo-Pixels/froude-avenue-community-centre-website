import { Button } from "@/components/ui/button";
import Link from "next/link";
import { api } from "@/trpc/server";
import ServiceCard from "./ServiceCard";

const Service = async () => {
  const { services } = await api.service.getAll();

  // Get active services, limit to 4 for display
  const displayedServices =
    services?.filter((service) => service.isActive).slice(0, 6) ?? [];

  return (
    <section id="service" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
          Our Services
        </h2>

        {displayedServices.length === 0 ? (
          <div className="text-muted-foreground py-12 text-center">
            No services available at this time.
          </div>
        ) : (
          <>
            <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {displayedServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="text-accent-foreground bg-accent hover:bg-accent-foreground/80 border-accent-foreground/50 hover:border-accent-foreground/80 mt-10 rounded-lg border-2 px-8 py-6 md:mt-12 lg:mt-16"
              >
                <Link
                  href="/pages/service"
                  className="text-muted-foreground text-xl transition-colors hover:text-white"
                >
                  Learn More About Our Services
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Service;
