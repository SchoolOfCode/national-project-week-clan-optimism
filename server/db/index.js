import pg from "pg";

const env = process.env;
const connectionString = env.PG_CONNECTIONSTRING;

const pool = new pg.Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
