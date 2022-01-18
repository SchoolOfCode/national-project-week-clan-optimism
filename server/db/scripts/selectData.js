import query from "../index.js";

async function selectData() {
    const data = await query('SELECT * FROM events;');
    
    console.log(data);
}

selectData();
