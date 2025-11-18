import { Button } from "@/components/ui/button";
import Link from "next/link";
import { api } from "@/trpc/server";
import ProgramCard from "./ProgramCard";

const Program = async () => {
  const { programs } = await api.program.getAll();

  // Get featured programs or first 3 active programs
  const displayedPrograms =
    programs?.filter((program) => program.isActive).slice(0, 8) ?? [];

  return (
    <section id="program" className="bg-muted py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
          Our Programs
        </h2>

        {displayedPrograms.length === 0 ? (
          <div className="text-muted-foreground py-12 text-center">
            No programs available at this time.
          </div>
        ) : (
          <>
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              {displayedPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="text-accent-foreground bg-accent hover:bg-accent-foreground/80 border-accent-foreground/50 hover:border-accent-foreground/80 mt-10 rounded-lg border-2 px-8 py-6 md:mt-12 lg:mt-16"
              >
                <Link
                  href="/pages/program"
                  className="text-muted-foreground text-xl transition-colors hover:text-white"
                >
                  View All Programs
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Program;
