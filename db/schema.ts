import { mysqlTable, serial, varchar, text, datetime } from 'drizzle-orm/mysql-core';

export const postsTable = mysqlTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull(),
  publishedAt: datetime('published_at', { mode: 'string' }).notNull(),
  description: varchar('description', { length: 500 }).notNull(),
  content: text('content').notNull(),
});