import React, {useState} from 'react';
import "./editDataButton.css";

function EditDataButton(props) {
    const [description, setDescription] = useState(props.event_description);
    const [isDescriptionInputHidden, setIsDescriptionInputHidden] = useState(true);

    function handleSubmit(event) {
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

    function handleEditButtonClick() {
        setIsDescriptionInputHidden(!isDescriptionInputHidden);
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type="button" className="edit-data-button" onClick={handleEditButtonClick}>Edit</button>
            <br />
            <div className={isDescriptionInputHidden ? "hidden" : ""}>
                <input id="datainput" onChange={handleChange} value={description} />
                <button type="submit" id="databutton">Submit</button>
            </div>
        </form>
    );
}

export default EditDataButton;
