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
                <span className="KanbanTask-added">img</span>
                <button className="KanbanTask-btn-edit">Edit</button>
                <button className="KanbanTask-btn-delete">Delete</button>
            </div>
        </div>
    );
};

export default KanbanTask;
