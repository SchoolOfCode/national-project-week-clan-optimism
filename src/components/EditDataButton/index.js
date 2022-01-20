import React from "react";

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
      <input placeholder="edit event description..." />
      <button className="edit-event-button" type="submit" value={eventid}>
        Edit
      </button>
    </form>
  );
}
