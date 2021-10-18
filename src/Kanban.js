import React, { useState } from "react";
import { columnsRawData, tasksRowData } from "./KanbanData";
import KanbanColumn from "./KanbanColumn";
import { TasksProvider } from "./context/TasksContext";
import "./Kanban.css";
import { DragDropContext } from "react-beautiful-dnd";

const Kanban = () => {
    const [columns, setColumns] = useState(columnsRawData);
    const [tasks, setTasks] = useState(
        JSON.parse(window.localStorage.getItem("tasks")) || tasksRowData
    );
    window.localStorage.setItem("tasks", JSON.stringify(tasks));

    const updateTasksIds = (filteredTasks) => {
        let updatedColumns = columns;
        updatedColumns.forEach((c) => {
            filteredTasks.forEach((t) => {
                if (c.id === t.idColumn && !c.taskIds.includes(t)) {
                    c.taskIds.push(t);
                } else return;
            });
        });
        setColumns(updatedColumns);
    };

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const column = columns[source.droppableId];
        const newTaskIds = Array.from(
            tasks.map((t) => {
                return t.id;
            })
        );
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="Kanban">
                <h1 className="Kanban-title">Kanban</h1>
                <TasksProvider value={tasks}>
                    <div className="Kanban-columns-container">
                        {columns.map((c) => {
                            return (
                                <KanbanColumn
                                    columnData={c}
                                    key={c.name}
                                    updatedTasks={updateTasksIds}
                                />
                            );
                        })}
                    </div>
                </TasksProvider>
            </div>
        </DragDropContext>
    );
};

export default Kanban;
