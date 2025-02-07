import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

console.log( process.env.DATABASE_URL)

export default defineConfig({
  out: './drizzle',
  schema: './database/schema.js',
  dialect: 'postgresql', // чтобы подключить mysql мы просто указываем тут mysql и всё, код самого приложения менять не надо
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});