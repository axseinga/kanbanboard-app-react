import React from "react";
import KanbanTask from "./KanbanTask";

const KanbanColumn = () => {
    return (
        <div>
            <h2>Columns name</h2>
            <p>n tasks in column / task limit</p>
            <div>
                <KanbanTask />
            </div>
        </div>
    );
};

export default KanbanColumn;
