import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const partnerRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const partners = await ctx.db.partner.findMany({
        orderBy: { updatedAt: "desc" },
      });

      return { partners };
    } catch (error) {
      console.error("Error fetching partners:", error);
      return { partners: [] };
    }
  }),
});
