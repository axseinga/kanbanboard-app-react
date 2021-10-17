import React from "react";
import "./KanbanTask.css";

const KanbanTask = (props) => {
    return (
        <div className="KanbanTask">
            <div className="KanbanTask-assigned">
                <span className="KanbanTask-assigned-img">
                    {props.task.user}
                </span>
            </div>
            <div className="KanbanTask-content">{props.task.text}</div>
            <div className="KanbanTask-options">
                <button
                    className="KanbanTask-btn-edit"
                    style={{ backgroundColor: `${props.color}` }}
                >
                    Edit
                </button>
                <button
                    className="KanbanTask-btn-delete"
                    style={{ backgroundColor: `${props.color}` }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default KanbanTask;
