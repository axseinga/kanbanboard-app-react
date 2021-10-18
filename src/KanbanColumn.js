import React, { useContext } from "react";
import { TasksContext } from "./context/TasksContext";
import KanbanTask from "./KanbanTask";
import "./KanbanColumn.css";
import { Droppable } from "react-beautiful-dnd";

const KanbanColumn = (props) => {
    const tasks = useContext(TasksContext);
    const filteredTasks = tasks.filter(
        (task) => task.idColumn === props.columnData.id
    );
    props.updatedTasks(filteredTasks);
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
                <Droppable droppableId={`${props.columnData.id}`}>
                    {(provided) => (
                        <div
                            ref={provided.innerRef}
                            className="KanbanColumns-tasks-container"
                            {...provided.droppableProps}
                        >
                            {filteredTasks.map((task, index) => {
                                return (
                                    <KanbanTask
                                        key={task.id}
                                        id={task.id}
                                        task={task}
                                        color={props.columnData.color}
                                        index={index}
                                    />
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
            <div className="KanbanColumn-footer">
                <button className="KanbanColumn-btn-add">Add task</button>
            </div>
        </div>
    );
};

export default KanbanColumn;
