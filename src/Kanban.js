import React, { useState } from "react";
import { columnsRawData, tasksRowData } from "./KanbanData";
import KanbanColumn from "./KanbanColumn";
import { TasksProvider } from "./context/TasksContext";
import "./Kanban.css";

const Kanban = () => {
    const [columns, setColumns] = useState(columnsRawData);
    const [tasks, setTasks] = useState(
        JSON.parse(window.localStorage.getItem("tasks")) || tasksRowData
    );
    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    return (
        <div className="Kanban">
            <h1 className="Kanban-title">Kanban</h1>
            <TasksProvider value={tasks}>
                <div className="Kanban-columns-container">
                    {columns.map((c) => {
                        return <KanbanColumn columnData={c} key={c.name} />;
                    })}
                </div>
            </TasksProvider>
        </div>
    );
};

export default Kanban;
