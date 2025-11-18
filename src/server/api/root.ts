import { staffRouter } from "@/server/api/routers/staff";
import { programRouter } from "@/server/api/routers/program";
import { serviceRouter } from "@/server/api/routers/service";
import { partnerRouter } from "@/server/api/routers/partner";

import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  staff: staffRouter,
  program: programRouter,
  service: serviceRouter,
  partner: partnerRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.staff.getAll();
 *       ^? staff[]
 */
export const createCaller = createCallerFactory(appRouter);
