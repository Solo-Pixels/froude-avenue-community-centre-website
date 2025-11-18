import { Button } from "@/components/ui/button";
import Link from "next/link";

const Outreach = () => {
  return (
    <section id="outreach" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl bg-linear-to-br from-[#f9f3ff] via-[#fff9f0] to-[#f1f9ff] p-10 shadow-lg lg:p-16">
          <p className="text-sm tracking-[0.4em] text-[#8b6e4a] uppercase">
            Outreach / Satellite Sites
          </p>
          <h2 className="text-primary mt-4 mb-6 text-3xl font-bold md:text-4xl">
            Connecting Three Neighbourhood Hubs
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed lg:text-xl">
            Our Outreach and Satellite Sites, coordinated by{" "}
            <span className="text-primary font-semibold">Nikita Ryall</span>,
            serve three neighbourhood centres —{" "}
            <span className="text-primary font-semibold">
              West Heights, Chalker Place, and Eric &amp; McKay
            </span>
            . These centres offer a range of community programs for children,
            youth, and seniors throughout the week, bringing resources and
            connection closer to home for every family.
          </p>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="text-accent-foreground bg-accent hover:bg-accent-foreground/80 border-accent-foreground/50 hover:border-accent-foreground/80 mt-10 rounded-lg border-2 px-8 py-6 md:mt-12 lg:mt-16"
            >
              <Link
                href="/pages/outreach"
                className="text-muted-foreground text-xl transition-colors hover:text-white"
              >
                Learn More About Our Outreach
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outreach;
