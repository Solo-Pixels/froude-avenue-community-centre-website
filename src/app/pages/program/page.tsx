import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import NavBar from "@/app/_components/NavBar";
import Footer from "@/app/_components/Footer";
import Link from "next/link";
import GoBack from "@/app/_components/GoBack";

import { api } from "@/trpc/server";

const ProgramsPage = async () => {
  const { programs } = await api.program.getAll();
  const activePrograms = programs?.filter((program) => program.isActive) ?? [];

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* <GoBack href="/" label="Return to Home Page" /> */}

          <h2 className="mb-6 text-center text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
            Our Programs
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-center text-lg">
            Explore every program currently offered by the Froude Avenue
            Community Centre. From daily drop-ins to seasonal initiatives, these
            activities keep our neighbourhood learning, growing, and connected.
          </p>

          {activePrograms.length === 0 ? (
            <div className="text-muted-foreground py-12 text-center">
              No programs are available right now. Please check back soon.
            </div>
          ) : (
            <div className="space-y-8">
              {activePrograms.map((program) => {
                return (
                  <Card
                    key={program.id}
                    className="transition-shadow hover:shadow-xl"
                  >
                    <div className="p-6">
                      <h3 className="text-foreground mt-0 mb-3 text-3xl font-bold">
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          <div className="bg-secondary mt-16 rounded-lg p-8 text-center md:p-12">
            <h2 className="text-primary mb-4 text-3xl font-bold">
              Want to get involved?
            </h2>
            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg">
              Reach out to our team to register for a program, volunteer, or ask
              questions about upcoming sessions.
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

export default ProgramsPage;
