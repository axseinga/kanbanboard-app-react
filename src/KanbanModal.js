import React from "react";
import "./KanbanModal.css";
import useInputState from "./useInputState";

const KanbanModal = (props) => {
    const [text, handleChangeText] = useInputState("");
    const [user, handleChangeUser] = useInputState("");

    const newTask = { content: text, person: user };

    return (
        <div className="KanbanModal">
            <section className="KanbanModal-content">
                <span
                    className="KanbanModal-close-btn"
                    onClick={props.closeModal}
                ></span>
                <form
                    className="KanbanModal-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        props.addTask(newTask);
                    }}
                >
                    <div className="KanbanModal-input-container">
                        <label htmlFor="task">Task: </label>
                        <textarea
                            className="KanbanModal-input"
                            type="text"
                            cols="20"
                            rows="5"
                            value={text}
                            onChange={handleChangeText}
                            name="task"
                            id="task"
                        ></textarea>
                    </div>
                    <div className="KanbanModal-input-container">
                        <label htmlFor="user">For: </label>
                        <input
                            className="KanbanModal-input"
                            type="text"
                            name="user"
                            id="user"
                            value={user}
                            onChange={handleChangeUser}
                        ></input>
                    </div>
                    <button className="KanbanModal-input-submit-btn">
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
};

export default KanbanModal;
