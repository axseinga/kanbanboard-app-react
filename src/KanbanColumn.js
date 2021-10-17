import React from "react";
import KanbanTask from "./KanbanTask";
import "./KanbanColumn.css";

const KanbanColumn = (props) => {
    return (
        <div className="KanbanColumn">
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
    );
};

export default KanbanColumn;
