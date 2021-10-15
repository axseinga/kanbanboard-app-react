import React from "react";
import KanbanColumn from "./KanbanColumn";
import "./Kanban.css";

const Kanban = () => {
    const taskLimitNumber = 5;
    const columns = [
        { id: 1, name: "Pending", limit: taskLimitNumber },
        { id: 2, name: "Analysis - Doing", limit: taskLimitNumber },
        { id: 3, name: "Analysis - Done", limit: taskLimitNumber },
        { id: 4, name: "Development - Doing", limit: taskLimitNumber },
        { id: 5, name: "Development - Done", limit: taskLimitNumber },
        { id: 6, name: "Test", limit: taskLimitNumber },
        { id: 7, name: "Deploy", limit: taskLimitNumber },
    ];

    return (
        <div className="Kanban">
            <h1 className="Kanban-title">Kanban</h1>
            <div className="Kanban-columns-container">
                <KanbanColumn />
                <KanbanColumn />
                <KanbanColumn />
                <KanbanColumn />
                <KanbanColumn />
                <KanbanColumn />
                <KanbanColumn />
            </div>
        </div>
    );
};

export default Kanban;
