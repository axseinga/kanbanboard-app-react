import React, { useContext } from "react";
import { TasksContext } from "./context/TasksContext";
import KanbanTask from "./KanbanTask";
import "./KanbanColumn.css";

const KanbanColumn = (props) => {
    const tasks = useContext(TasksContext);
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
                <div className="KanbanColumns-tasks-container">
                    {tasks
                        .filter((task) => task.idColumn === props.columnData.id)
                        .map((task) => {
                            return (
                                <KanbanTask
                                    key={task.id}
                                    task={task}
                                    color={props.columnData.color}
                                />
                            );
                        })}
                </div>
            </div>
            <div className="KanbanColumn-footer">
                <button className="KanbanColumn-btn-add">Add task</button>
            </div>
        </div>
    );
};

export default KanbanColumn;
