import React from "react";

const KanbanTask = () => {
    return (
        <div>
            <div>
                <span>person assigned</span>
            </div>
            <div>task content</div>
            <div>
                <span>who added</span>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default KanbanTask;
