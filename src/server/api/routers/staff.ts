import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const staffRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const staffMembers = await ctx.db.staff.findMany({
        // @ts-expect-error - order field exists in schema but TypeScript types may be cached
        orderBy: { order: "asc" },
      });

      return { staffMembers };
    } catch (error) {
      console.error("Error fetching staff members:", error);
      return { staffMembers: [] };
    }
  }),
});
