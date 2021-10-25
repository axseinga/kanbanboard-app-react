import React from "react";
import "./KanbanTask.css";
import { Draggable } from "react-beautiful-dnd";

const KanbanTask = (props) => {
    return (
        <Draggable draggableId={`${props.task.id}`} index={props.index}>
            {(provided) => (
                <div
                    className="KanbanTask"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <div className="KanbanTask-assigned">
                        <span className="KanbanTask-assigned-img">
                            {props.task.user}
                        </span>
                    </div>
                    <div className="KanbanTask-content">{props.task.text}</div>
                    <div className="KanbanTask-options">
                        <button
                            className="KanbanTask-btn-edit"
                            style={{ backgroundColor: `${props.color}` }}
                        >
                            Edit
                        </button>
                        <button
                            className="KanbanTask-btn-delete"
                            style={{ backgroundColor: `${props.color}` }}
                            onClick={() => props.removeTask(props.task.id)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default KanbanTask;
