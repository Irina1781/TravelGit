import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const climatesTable = pgTable("climates", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
});

export const restTypesTable = pgTable("restTypes", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
});