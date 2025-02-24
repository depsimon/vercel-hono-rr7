import { Hono } from 'hono';
import { createRequestHandler } from 'react-router';

// @ts-expect-error - virtual module provided by React Router at build time
import * as build from 'virtual:react-router/server-build';

declare module 'react-router' {
  interface AppLoadContext {
    VALUE_FROM_HONO: string;
  }
}

const app = new Hono();

// Add any additional Hono middleware here

const handler = createRequestHandler(build);
app.mount('/', (req) =>
  handler(req, {
    // Add your "load context" here based on the current request
    VALUE_FROM_HONO: 'Hello from Hono',
  }),
);

export default app.fetch;
