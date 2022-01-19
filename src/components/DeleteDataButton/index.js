import React, { useEffect, useState } from "react";
import "./deleteDataButton.css";

export default function DeleteDataButton({ eventid }) {
  const [deleteID, setDeleteID] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5500/api/v1/events/" + deleteID, {
      method: "DELETE",
    });
    console.log("delete req passed");
  }, [deleteID]);

  function handleOnClick(e) {
    setDeleteID(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <button
        onClick={(e) => {
          handleOnClick(e);
        }}
        className="delete-data-button"
        value={eventid}
      >
        Delete event
      </button>
    </div>
  );
}
