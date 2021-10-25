import React from "react";
import "./KanbanSidebar.css";
import {
    BsQuestionCircle,
    BsSearch,
    BsPersonLinesFill,
    BsBell,
} from "react-icons/bs";

const style = { color: "white", fontSize: "1.5rem", cursor: "pointer" };

const KanbanSidebar = () => {
    return (
        <div className="KanbanSidebar">
            <div className="KanbanSidebar-upperColumn">
                <BsBell style={style} />
            </div>
            <div className="KanbanSidebar-bottomColumn">
                <BsPersonLinesFill style={style} />
                <BsSearch style={style} />
                <BsQuestionCircle style={style} />
            </div>
        </div>
    );
};

export default KanbanSidebar;
