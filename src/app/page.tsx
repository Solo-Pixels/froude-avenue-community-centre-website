import { api, HydrateClient } from "@/trpc/server";

import NavBar from "./_components/NavBar";
import Hero from "./_components/Hero";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Program from "./_components/Program";
import Service from "./_components/Service";
import Partner from "./_components/Partner";
import Footer from "./_components/Footer";
import Outreach from "./_components/Outreach";

export default async function Home() {
  void api.staff.getAll.prefetch();

  return (
    <HydrateClient>
      <NavBar />
      <Hero />
      <Banner />
      <About />
      <Program />
      <Service />
      <Outreach />
      <Partner />
      <Footer />
    </HydrateClient>
  );
}
