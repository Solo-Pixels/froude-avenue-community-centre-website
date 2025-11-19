import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const staffRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const staffMembers = await ctx.db.staff.findMany({
        orderBy: { order: "asc" },
      });

      return { staffMembers };
    } catch (error) {
      console.error("Error fetching staff members:", error);
      return { staffMembers: [] };
    }
  }),
});
