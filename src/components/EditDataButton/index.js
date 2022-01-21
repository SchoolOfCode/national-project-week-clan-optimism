import React from "react";
import "./editDataButton.css";

export default function EditDataButton({ eventid }) {
  function handleSubmit(e) {
    e.preventDefault();

    const editObj = {
      event_description: { event_description: e.target[0].value },
      id: e.target[1].value,
    };

    fetch("http://localhost:5500/api/v1/events/" + editObj.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editObj.event_description),
    });
    console.log(editObj.event_description);
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <button
        type="button"
        className="edit-data-button"
        value={eventid}
        onClick={() => {
          const magic = document.getElementById("datainput");
          const boom = document.getElementById("databutton");
          magic.classList.toggle("edit-data");
          boom.classList.toggle("edit-data");
        }}
      >
        Edit
      </button>
      <br />
      <input
        id="datainput"
        className="edit-data"
        placeholder="edit event description..."
      />
      <button id="databutton" className="edit-data" type="submit">
        submit
      </button>
    </form>
  );
}
