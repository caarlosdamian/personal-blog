import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise'; // Necesitas este cliente para la conexión

let db: ReturnType<typeof drizzle> | null = null;

export const connectToDatabase = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('MISSING DATABASE_URL');
  }

  if (db) {
    console.log('MySQL is already connected');
    return db;
  }

  try {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    db = drizzle(connection);
    console.log('MySQL is connected');
    return db;
  } catch (error) {
    console.error('MySQL connection failed', error);
    throw error;
  }
};
