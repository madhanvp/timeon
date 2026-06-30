import { Router, Request, Response } from "express";
import { prisma } from "../db/prisma";

const router = Router();

/**
 * GET /api/health
 *
 * Health check endpoint that verifies the entire stack is operational:
 * - Express server is running
 * - Prisma Client is connected
 * - PostgreSQL database is accessible
 *
 * This endpoint is useful for:
 * - Load balancers and monitoring systems (Kubernetes, Docker Swarm)
 * - Deployment verification (CI/CD pipelines)
 * - Incident alerts (if health check fails, the app is down)
 * - Status dashboards
 */
router.get("/api/health", async (req: Request, res: Response): Promise<void> => {
  try {
    // Lightweight database connectivity check using Prisma
    // $queryRaw with a simple SELECT 1 is the fastest way to verify the connection
    await prisma.$queryRaw`SELECT 1`;

    // Database is healthy
    res.status(200).json({
      status: "ok",
      database: "connected",
    });
  } catch (error) {
    // Database connection failed
    console.error("Health check failed:", error);

    res.status(500).json({
      status: "error",
      database: "disconnected",
    });
  }
});

export default router;
