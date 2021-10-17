import React from "react";
import KanbanTask from "./KanbanTask";
import "./KanbanColumn.css";

const KanbanColumn = (props) => {
    return (
        <div
            className="KanbanColumn"
            style={{ backgroundColor: `${props.columnData.color}` }}
        >
            <div className="KanbanColumn-main">
                <h2 className="KanbanColumn-name">{props.columnData.name}</h2>
                <p className="KanbanColumn-numbers">
                    {props.columnData.tasks} / {props.columnData.limit};
                </p>
                <div className="KanbanColumns-tasks-container">
                    <KanbanTask />
                    <KanbanTask />
                    <KanbanTask />
                </div>
            </div>
            <div className="KanbanColumn-footer">
                <button className="KanbanColumn-btn-add">Add task</button>
            </div>
        </div>
    );
};

export default KanbanColumn;
