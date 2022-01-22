// import query from "../db";

function getProfileHistory(req, res) {
  res.send("profile data sent");
  // console.log("getting profile data");
  // const data = await query("GET * FROM profiles WHERE profile_name = $1;", [
  //   req.params.name,
  // ]);

  // res.json({
  //   success: true,
  //   message: "data recieved from profile",
  //   payload: data.rows,
  // });
}

function deleteProfileHistory(req, res) {
  res.send("profile deleted");
  // const data = await query("DELETE FROM profiles WHERE profile_name = $1;", [
  //   req.params.name,
  // ]);
  // res.json({
  //   success: true,
  //   message: "data deleted, homie safe",
  // });
}

export { getProfileHistory, deleteProfileHistory };
