import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { db } from './database/index.js';
import { climatesTable } from './database/schema.js';

const app = new Hono()

app.get('/', async (c) => {
  const climates = await db.select().from(climatesTable)
  return c.text(JSON.stringify(climates))
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
