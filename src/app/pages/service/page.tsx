import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import NavBar from "@/app/_components/NavBar";
import Footer from "@/app/_components/Footer";
import Link from "next/link";

import { api } from "@/trpc/server";

const ServicesPage = async () => {
  const { services } = await api.service.getAll();
  const activeServices = services?.filter((service) => service.isActive) ?? [];

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <h2 className="mb-6 text-center text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
            Our Services
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-center text-lg">
            Every support we offer—right here in one place. Learn how the Froude
            Avenue Community Centre serves neighbours of every age through
            health, employment, family, and community programs.
          </p>

          {activeServices.length === 0 ? (
            <div className="text-muted-foreground py-12 text-center">
              No services are available right now. Please check back soon.
            </div>
          ) : (
            <div className="mb-16 space-y-8">
              {activeServices.map((service) => (
                <Card
                  key={service.id}
                  className="transition-shadow hover:shadow-xl"
                >
                  <div className="p-6">
                    <h3 className="text-foreground mb-3 text-3xl font-bold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <div className="bg-secondary rounded-lg p-8 text-center md:p-12">
            <h3 className="text-primary mb-4 text-3xl font-bold">
              Need special assistance?
            </h3>
            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg">
              Our team is here to help. Reach out before your visit, or stop by
              the front desk to connect with a staff member who can assist you.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <Link href="/#contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default ServicesPage;
