import React, { useEffect, useState } from "react";
import { columnsRawData } from "./KanbanData";
import KanbanColumn from "./KanbanColumn";
import "./Kanban.css";
import KanbanModal from "./KanbanModal";
import { DragDropContext } from "react-beautiful-dnd";
import KanbanSidebar from "./KanbanSidebar";
import KanbanPopup from "./KanbanPopup";

const Kanban = () => {
  const [columns, setColumns] = useState(
    JSON.parse(window.localStorage.getItem("columns")) || columnsRawData
  );
  const [modal, setModal] = useState(false);

  const [popup, setPopup] = useState(false);

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
      setPopup(true);
            if (finish.taskIds.length < finish.limit) {
                const startTaskIds = Array.from(start.taskIds);
                const [item] = startTaskIds.splice(source.index, 1);

                const finishTaskIds = Array.from(finish.taskIds);
                finishTaskIds.splice(destination.index, 0, item);

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
                setColumns(newColumnsState2);
            } else return;
        }
    };

    const openModal = (data) => {
        const columnId = data.id;
        setModal(columnId);
    };

    const closeModal = () => {
        setModal(false);
    };

  const closePopup = () => {
    setPopup(false);
  };

    const addTask = (newTask) => {
        setModal(false);
        const updatedColumns = columns.map((column) => {
            if (column.id === newTask.idColumn && column.taskIds.length < 5) {
                column.taskIds.push(newTask);
                return column;
            } else return column;
        });
        setColumns(updatedColumns);
    };

    const removeTask = (taskId) => {
        const updatedColumns = columns
            .map((column) => {
                return Object.assign({}, column, {
                    taskIds: column.taskIds.filter(
                        (task) => task.id !== taskId
                    ),
                });
            })
            .filter((column) => column.taskIds.length >= 0);
        setColumns(updatedColumns);
    };

    const editTask = (taskId, newUser, newText) => {
        const updatedColumns = columns.map((column) => {
            return Object.assign({}, column, {
                taskIds: column.taskIds.map((task) => {
                    if (task.id === taskId) {
                        task.user = newUser;
                        task.text = newText;
                        return task;
                    }
                    return task;
                }),
            });
        });
        setColumns(updatedColumns);
    };

    useEffect(() => {
        window.localStorage.setItem("columns", JSON.stringify(columns));
    }, [columns]);

    return (
        <>
            <KanbanSidebar />
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="Kanban">
                    {modal && (
                        <KanbanModal
                            closeModal={closeModal}
                            addTask={addTask}
                            columnData={modal}
                        />
                    )}
          {popup && (
            <KanbanPopup
              closeModal={closePopup}
              first={
                "What's the situation? Feel free to explain it in as much detail \
                as you'd like."
              }
              second={"What part of the situation is most troubling?"}
              third={
                "Why did you decide to take this action (there're countless ways \
              to reduce stress, why this specific one in this specific case)"
              }
            />
          )}
                    <h1 className="Kanban-title">Kanban</h1>
                    <div className="Kanban-columns-container">
                        {columns.map((c) => {
                            return (
                                <KanbanColumn
                                    columnData={c}
                                    key={c.name}
                                    openModal={openModal}
                                    removeTask={removeTask}
                                    editTask={editTask}
                                />
                            );
                        })}
                    </div>
                </div>
            </DragDropContext>
        </>
    );
};

export default Kanban;
