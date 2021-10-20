import React from "react";
import "./KanbanModal.css";

const KanbanModal = () => {
    return (
        <div className="KanbanModal">
            <section className="KanbanModal-content">
                <span className="KanbanModal-close-btn"></span>
                <form className="KanbanModal-form">
                    <div className="KanbanModal-input-container">
                        <label htmlFor="task">Task: </label>
                        <textarea
                            className="KanbanModal-input"
                            type="text"
                            cols="20"
                            rows="5"
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
