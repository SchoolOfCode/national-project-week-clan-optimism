import query from "../index.js";

async function deleteData() {
    await query('DELETE FROM events;');
}

deleteData();
