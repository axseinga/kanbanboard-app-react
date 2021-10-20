import React, { useEffect, useState } from "react";
import { columnsRawData } from "./KanbanData";
import KanbanColumn from "./KanbanColumn";
import { TasksProvider } from "./context/TasksContext";
import "./Kanban.css";
import { DragDropContext } from "react-beautiful-dnd";

const Kanban = () => {
    const [columns, setColumns] = useState(columnsRawData);
    /*const [tasks, setTasks] = useState(tasksRowData);*/

    /*const updateTasksIds = (filteredTasks) => {
        let updatedColumns = columns;
        updatedColumns.forEach((c) => {
            filteredTasks.forEach((t) => {
                if (c.id === t.idColumn && !c.taskIds.includes(t)) {
                    c.taskIds.push(t);
                } else return;
            });
        });
        updatedColumns.forEach((c) => {
            const tasks = c.taskIds.length;
            c.tasks = tasks;
        });
        setColumns(updatedColumns);
    };*/

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            console.log("no destination");
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            console.log("index and destination the same");
            return;
        }

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds);

            const swapTask = newTaskIds[source.index];
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, swapTask);

            const newColumnsState = columns.map((c) => {
                if (c.id === start.id) {
                    c.taskIds = newTaskIds;
                    return c;
                } else return c;
            });

            const newColumnsState2 = [...newColumnsState];
            setColumns(newColumnsState2);
        } else {
            const startTaskIds = Array.from(start.taskIds);
            const [item] = startTaskIds.splice(source.index, 1);

            const finishTaskIds = Array.from(finish.taskIds);
            finishTaskIds.splice(destination.index, 0, item);

            console.log(startTaskIds);
            console.log(finishTaskIds);

            const newColumnsState = columns.map((c) => {
                if (c.id === start.id) {
                    c.taskIds = startTaskIds;
                    return c;
                } else if (c.id === finish.id) {
                    c.taskIds = finishTaskIds;
                    return c;
                } else return c;
            });
            const newColumnsState2 = [...newColumnsState];
            console.log(newColumnsState2);
            setColumns(newColumnsState2);
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="Kanban">
                <h1 className="Kanban-title">Kanban</h1>
                {/*<TasksProvider value={tasks}>*/}
                <div className="Kanban-columns-container">
                    {columns.map((c) => {
                        return (
                            <KanbanColumn
                                columnData={c}
                                key={c.name}
                                /*updatedTasks={updateTasksIds}*/
                            />
                        );
                    })}
                </div>
                {/*</TasksProvider>*/}
            </div>
        </DragDropContext>
    );
};

export default Kanban;
