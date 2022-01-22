import React, {useState} from 'react';
import "./editDataButton.css";

function EditDataButton(props) {
    const [description, setDescription] = useState(props.event_description);

    function handleSubmit(event) {
        // fetch('api url' + props.eventid), method: POST, with `description` in body
        fetch("http://localhost:5500/api/v1/events/" + props.event_id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({event_description: description}),
        });
        event.preventDefault();
    }

    function handleChange(event) {
        setDescription(event.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type="button" className="edit-data-button" value={props.event_id} onClick={() => {
                const editorDiv = document.querySelectorAll(`div[hideselector='${props.event_id}']`);
                editorDiv[0].classList.toggle("hidden");
                }}
            >Edit</button>
            <br />
            <div className="hidden" hideselector={props.event_id}>
                <input id="datainput" type='text' onChange={handleChange} value={description} />
                <button id="databutton" type='submit'>Submit</button>
            </div>
        </form>
    );
}

export default EditDataButton;
