import React, { useContext } from "react";
import { TasksContext } from "./context/TasksContext";
import "./KanbanTask.css";

const KanbanTask = () => {
    const tasks = useContext(TasksContext);
    return (
        <div className="KanbanTask">
            <div className="KanbanTask-assigned">
                <span className="KanbanTask-assigned-img">Anna</span>
            </div>
            <div className="KanbanTask-content">task content</div>
            <div className="KanbanTask-options">
                <span className="KanbanTask-added">img</span>
                <button className="KanbanTask-btn-edit">Edit</button>
                <button className="KanbanTask-btn-delete">Delete</button>
            </div>
        </div>
    );
};

export default KanbanTask;
