import { loadEnv, defineConfig } from '@medusajs/framework/utils';
import { Modules } from "@medusajs/framework/utils"; // Importing Modules

loadEnv(process.env.NODE_ENV || 'development', process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
      workerMode: process.env.MEDUSA_WORKER_MODE as "shared" | "worker" | "server",
      redisUrl: process.env.REDIS_URL,
      admin: {
        disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
      },
    },
  },
  plugins: [
    `medusa-fulfillment-manual`,
    `medusa-plugin-wishlist`,
  ],
  modules: [
    {
      resolve: "@medusajs/medusa/cache-redis",
      options: {
        redisUrl: process.env.REDIS_URL,
      },
    },
    {
      resolve: "@medusajs/medusa/event-bus-redis",
      options: {
        redisUrl: process.env.REDIS_URL,
      },
    },
    {
      resolve: "@medusajs/medusa/workflow-engine-redis",
      options: {
        redis: {
          url: process.env.REDIS_URL,
        },
      },
    },
  ],
  admin: {
    backendUrl: process.env.MEDUSA_BACKEND_URL,  // Adding the backend URL from environment variable
  },
});
