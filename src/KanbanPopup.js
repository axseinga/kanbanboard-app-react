import React from "react";
import "./KanbanPopup.css";
import useInputState from "./useInputState";

const KanbanPopup = (props) => {
  const [first, handleChangeFirst] = useInputState("");
  const [second, handleChangeSecond] = useInputState("");
  const [third, handleChangeThird] = useInputState("");

  const columnData = props.columnData;

  return (
    <div className="KanbanPopup">
      <section className="KanbanPopup-content">
        <span
          className="KanbanPopup-close-btn"
          onClick={props.closePopup}
        ></span>
        <form
          className="KanbanPopup-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="KanbanPopup-input-container">
            <div className="KanbanModel-input-label">
              <label htmlFor="first">{columnData.first}</label>
            </div>
            <input
              className="KanbanPopup-input"
              type="text"
              name="first"
              id="first"
              value={first}
              onChange={handleChangeFirst}
            ></input>
          </div>
          <div className="KanbanPopup-input-container">
            <div className="KanbanModel-input-label">
              <label htmlFor="second">{columnData.second}</label>
            </div>
            <input
              className="KanbanPopup-input"
              type="text"
              name="second"
              id="second"
              value={second}
              onChange={handleChangeSecond}
            ></input>
          </div>
          <div className="KanbanPopup-input-container">
            <div className="KanbanModel-input-label">
              <label htmlFor="third">{columnData.third}</label>
            </div>
            <input
              className="KanbanPopup-input"
              type="text"
              name="third"
              id="third"
              value={third}
              onChange={handleChangeThird}
            ></input>
          </div>
          <button
            className="KanbanPopup-input-submit-btn"
            onClick={props.closePopup}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default KanbanPopup;
