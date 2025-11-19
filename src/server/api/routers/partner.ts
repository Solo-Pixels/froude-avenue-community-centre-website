import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

// Static partner data (partner model was removed from schema)
const staticPartners = [
  "Newfoundland and Labrador Housing",
  "Fry Family Foundation",
  "College of the North Atlantic",
  "Memorial University",
  "Marine Institute",
  "City of St.John's",
  "Kids Eat Smart Foundation",
  "NL Health Services",
  "O'Brien's Farm",
  "Food First NL",
  "NL Public Libraries",
];

export const partnerRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return { partners: staticPartners };
  }),
});
