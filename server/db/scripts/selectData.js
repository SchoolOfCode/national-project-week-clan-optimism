import query from "../index.js";

export default async function selectData() {
  const data = await query("SELECT * FROM events ORDER BY id DESC;");

  return data;
}
