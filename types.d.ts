declare namespace NodeJS {
    interface ProcessEnv {
      REDIS_URL: string;
      DATABASE_URL: string;
      STORE_CORS: string;
      ADMIN_CORS: string;
      AUTH_CORS: string;
      JWT_SECRET: string;
      COOKIE_SECRET: string;
      MEDUSA_WORKER_MODE?: string; // optional if it's not set always
      DISABLE_MEDUSA_ADMIN?: string; // optional
    }
  }
  