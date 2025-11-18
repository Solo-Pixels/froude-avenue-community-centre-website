import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import aboutImage0 from "@/assets/images/about1.png";

const About = () => {
  return (
    <section id="about" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
              About Us
            </h2>

            <p className="text-muted-foreground mb-6 text-xl leading-relaxed">
              <span className="font-bold">Mission Statement:</span> To encourage
              the involvement of tenants of all ages from birth – senior
              citizens in the housing community of the Froude Avenue area
              consisting of: Froude Avenue, Vimy Avenue, Vickers Avenue, Cashin
              Avenue Extension, Campbell Avenue Extension, Mundy Pond Road
              Extension, St.Teresa&apos;s Court, and Pond View Court, through
              the use of programs and activities implemented through the centre{" "}
              <span className="font-semibold tracking-widest">...</span>
            </p>

            <Button
              asChild
              size="lg"
              className="text-accent-foreground bg-accent hover:bg-accent-foreground/80 border-accent-foreground/50 hover:border-accent-foreground/80 mt-10 rounded-lg border-2 px-8 py-6 md:mt-12 lg:mt-16"
            >
              <Link
                href="/pages/about"
                className="text-muted-foreground text-xl transition-colors hover:text-white"
              >
                Read More
              </Link>
            </Button>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src={aboutImage0}
              alt="Funfair carousel"
              className="h-[500px] w-[500px] rounded-full object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
