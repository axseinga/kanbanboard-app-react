import React from "react";
import useInputState from "./useInputState";
import "./KanbanEditForm.css";

const KanbanEditForm = (props) => {
    const [text, handleChangeText] = useInputState(props.startText);
    const [user, handleChangeUser] = useInputState(props.startUser);
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                props.editTask(props.taskId, user, text);
                props.toggle();
            }}
            className="KanbanEditForm"
        >
            <div className="KanbanEditForm-input-container">
                <label htmlFor="task">Task: </label>
                <textarea
                    className="KanbanEditForm-input-textarea"
                    type="text"
                    cols="15"
                    rows="5"
                    value={text}
                    onChange={handleChangeText}
                    name="task"
                    id="task"
                    required
                ></textarea>
            </div>
            <div className="KanbanEditForm-input-container">
                <label htmlFor="user">For: </label>
                <input
                    className="KanbanEditForm-input"
                    type="text"
                    name="user"
                    id="user"
                    value={user}
                    onChange={handleChangeUser}
                    required
                ></input>
            </div>
            <button
                className="KanbanEditForm-btn"
                style={{ backgroundColor: `${props.color}` }}
            >
                Save
            </button>
        </form>
    );
};

export default KanbanEditForm;
