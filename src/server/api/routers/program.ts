import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const programRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const programs = await ctx.db.program.findMany({
        orderBy: { order: "asc" },
      });

      return { programs };
    } catch (error) {
      console.error("Error fetching programs:", error);
      return { programs: [] };
    }
  }),
});
