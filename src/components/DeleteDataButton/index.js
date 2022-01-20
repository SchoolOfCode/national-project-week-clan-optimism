import React from "react";
import "./deleteDataButton.css";

export default function DeleteDataButton({ eventid }) {
  function handleOnClick(e) {
    fetch("http://localhost:5500/api/v1/events/" + e.target.value, {
      method: "DELETE",
    });
    console.log("delete req passed").then(console.log("delete done"));
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
