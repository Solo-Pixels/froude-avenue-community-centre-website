import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const serviceRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const services = await ctx.db.service.findMany({
        orderBy: { updatedAt: "desc" },
      });

      return { services };
    } catch (error) {
      console.error("Error fetching services:", error);
      return { services: [] };
    }
  }),
});
