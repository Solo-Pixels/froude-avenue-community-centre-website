import { Card } from "@/components/ui/card";
import NavBar from "@/app/_components/NavBar";
import Footer from "@/app/_components/Footer";
import GoBack from "@/app/_components/GoBack";

const outreachSites = [
  {
    name: "Eric & McKay Centre",
    programs: [
      "Afterschool Program — Monday, Wednesday, and Friday",
      "Conversation Corner — Thursday evenings",
    ],
  },
  {
    name: "Chalker Place Centre",
    programs: [
      "Afterschool Program — Monday, Wednesday, and Friday",
      "Junior Youth Program — Wednesday evenings",
    ],
  },
  {
    name: "West Heights Centre",
    programs: [
      "Afterschool Program — Tuesday and Thursday",
      "Seniors Group — Thursdays at 1:00 p.m.",
    ],
  },
];

const OutreachPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          {/* <GoBack href="/" /> */}

          <h2 className="mb-6 text-center text-4xl font-bold text-[rgba(8,88,95,1)] md:text-5xl">
            Outreach & Satellite Sites
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-center text-lg">
            Program schedule for our neighbourhood centres coordinated by{" "}
            <span className="text-primary font-semibold">Nikita Ryall</span>.
            Each site provides weekly opportunities for children, youth, and
            seniors to connect, learn, and build community together.
          </p>

          <div className="space-y-8">
            {outreachSites.map((site) => (
              <Card
                key={site.name}
                className="transition-shadow hover:shadow-xl"
              >
                <div className="p-6">
                  <h3 className="text-foreground mb-4 text-3xl font-bold">
                    {site.name}
                  </h3>
                  <ul className="text-muted-foreground space-y-3 text-lg">
                    {site.programs.map((program) => (
                      <li key={program} className="leading-relaxed">
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-secondary mt-16 rounded-lg p-8 text-center md:p-12">
            <h3 className="text-primary mb-4 text-3xl font-bold">
              Need more details?
            </h3>
            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-lg">
              Contact <span className="font-semibold">Nikita Ryall</span> at{" "}
              <a
                href="mailto:nikitaryall@live.ca"
                className="text-primary underline underline-offset-2"
              >
                nikitaryall@live.ca
              </a>{" "}
              or call{" "}
              <a
                href="tel:7096312753"
                className="text-primary underline underline-offset-2"
              >
                709-631-2753
              </a>{" "}
              for site-specific program times and registration.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OutreachPage;
