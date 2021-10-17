import React, { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import "./Kanban.css";

const Kanban = () => {
    const taskLimitNumber = 5;
    const columnsRawData = [
        {
            id: 1,
            name: "Pending",
            limit: taskLimitNumber,
            tasks: 0,
            color: "red",
        },
        {
            id: 2,
            name: "Analysis - Doing",
            limit: taskLimitNumber,
            tasks: 0,
            color: "pink",
        },
        {
            id: 3,
            name: "Analysis - Done",
            limit: taskLimitNumber,
            tasks: 0,
            color: "purple",
        },
        {
            id: 4,
            name: "Development - Doing",
            limit: taskLimitNumber,
            tasks: 0,
            color: "yellow",
        },
        {
            id: 5,
            name: "Development - Done",
            limit: taskLimitNumber,
            tasks: 0,
            color: "green",
        },
        {
            id: 6,
            name: "Test",
            limit: taskLimitNumber,
            tasks: 0,
            color: "orange",
        },
        {
            id: 7,
            name: "Deploy",
            limit: taskLimitNumber,
            tasks: 0,
            color: "gray",
        },
    ];
    const [columns, setColumns] = useState(columnsRawData);

    return (
        <div className="Kanban">
            <h1 className="Kanban-title">Kanban</h1>
            <div className="Kanban-columns-container">
                {columns.map((c) => {
                    return <KanbanColumn columnData={c} key={c.id} />;
                })}
            </div>
        </div>
    );
};

export default Kanban;
