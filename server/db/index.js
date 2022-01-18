import pg from "pg";
// import { database } from "pg/lib/defaults";

const env = process.env;

const pool = new pg.Pool({
  user: env.PG_USER,
  host: env.PG_HOST,
  database: env.PG_DATABSE,
  password: env.PG_PASSWORD,
  port: env.PG_PORT,
  ssl: { rejectUnauthorized: false }
});

export default function query(text, params) {
  return pool.query(text, params);
}
