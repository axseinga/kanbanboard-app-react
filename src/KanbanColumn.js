import React from "react";
import KanbanTask from "./KanbanTask";
import "./KanbanColumn.css";

const KanbanColumn = () => {
    return (
        <div className="KanbanColumn">
            <h2 className="KanbanColumn-name">Column name</h2>
            <p className="KanbanColumn-numbers">
                n tasks in column / task limit
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
