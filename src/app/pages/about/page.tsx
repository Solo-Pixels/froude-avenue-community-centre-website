import NavBar from "@/app/_components/NavBar";
import Footer from "@/app/_components/Footer";
import { aboutText } from "@/assets/content/text";
import { Card } from "@/components/ui/card";
import { Target, Heart, Clock, Users, Mail, Phone } from "lucide-react";
import { api } from "@/trpc/server";

const AboutPage = async () => {
  const { staffMembers } = await api.staff.getAll();

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-linear-to-br from-[rgba(8,88,95,0.1)] via-transparent to-transparent py-16">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-center text-5xl font-bold text-[rgba(8,88,95,1)] md:text-6xl">
              Froude Avenue Community Centre
            </h1>
            <p className="text-muted-foreground mx-auto max-w-3xl text-center text-xl">
              Building community, fostering connections, and enriching lives
              since 1985
            </p>
          </div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-16">
          {/* Mission Statement */}
          <section className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[rgba(8,88,95,0.15)] to-[rgba(8,88,95,0.05)] shadow-md ring-2 ring-[rgba(8,88,95,0.1)]">
                <Target className="h-7 w-7 text-[rgba(8,88,95,1)]" />
              </div>
              <h2 className="text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
                Mission Statement
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              {aboutText.missionStatement}
            </p>
          </section>

          {/* Divider */}
          <div className="border-border mb-16 border-t"></div>

          {/* About Us */}
          <section className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <div className="from-secondary/40 to-secondary/20 ring-secondary/30 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br shadow-md ring-2">
                <Heart className="h-7 w-7 text-[rgba(8,88,95,1)]" />
              </div>
              <h2 className="text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
                About Us
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              {aboutText.aboutUs}
            </p>
          </section>

          {/* Divider */}
          <div className="border-border mb-16 border-t"></div>

          {/* History */}
          <section className="mb-16">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[rgba(8,88,95,0.15)] to-[rgba(8,88,95,0.05)] shadow-md ring-2 ring-[rgba(8,88,95,0.1)]">
                <Clock className="h-7 w-7 text-[rgba(8,88,95,1)]" />
              </div>
              <h2 className="text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
                Our History
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
              {aboutText.ourHistory}
            </p>
          </section>

          {/* Divider */}
          <div className="border-border mb-16 border-t"></div>

          {/* Staff Section */}
          <section>
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-secondary rounded-full p-4">
                <Users className="text-primary h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
                Our Team
              </h2>
            </div>

            {staffMembers.length === 0 ? (
              <div className="text-muted-foreground py-12 text-center">
                No staff information available at this time.
              </div>
            ) : (
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
                {staffMembers.map((staff) => (
                  <Card
                    key={staff.id}
                    className="bg-background border-border rounded-3xl p-6 shadow-md transition-shadow hover:shadow-lg"
                  >
                    <h3 className="text-primary mb-2 text-2xl font-bold">
                      {staff.firstName} {staff.lastName}
                      {staff.headLine && (
                        <span className="text-muted-foreground ml-2 text-lg font-normal">
                          {staff.headLine}
                        </span>
                      )}
                    </h3>
                    {staff.positionTitle && (
                      <p className="text-muted-foreground mb-4 text-lg font-semibold">
                        {staff.positionTitle}
                      </p>
                    )}
                    <div className="space-y-2">
                      {staff.phone && (
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4" />
                          <span className="wrap-break-word">{staff.phone}</span>
                        </div>
                      )}
                      {staff.email && (
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4" />
                          <a
                            href={`mailto:${staff.email}`}
                            className="hover:text-primary break-all transition-colors"
                          >
                            {staff.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
