import React from "react";
import KanbanColumn from "./KanbanColumn";

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
        <div>
            <h1>Kanban</h1>
            <div>
                <KanbanColumn />
            </div>
        </div>
    );
};

export default Kanban;
