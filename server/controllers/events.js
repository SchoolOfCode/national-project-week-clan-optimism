import selectData from "../db/scripts/selectData.js"


export const getAllEvents = async (req, res) => {
   const events = await selectData();
   res.json({
      success: true, 
      message: "all events",
      payload: events
   }

   );
   //res.send("using api route")
}