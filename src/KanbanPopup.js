import React from "react";
import "./KanbanPopup.css";
import useInputState from "./useInputState";

const KanbanPopup = (props) => {
  const [first, handleChangeFirst] = useInputState("");
  const [second, handleChangeSecond] = useInputState("");
  const [third, handleChangeThird] = useInputState("");

  return (
    <div className="KanbanModal">
      <section className="KanbanModal-content">
        <span
          className="KanbanModal-close-btn"
          onClick={props.closeModal}
        ></span>
        <form
          className="KanbanModal-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="KanbanModal-input-container">
            <div className="KanbanModel-input-label">
              <label htmlFor="user">
                {props.first}
              </label>
            </div>
            <input
              className="KanbanModal-input"
              type="text"
              name="first"
              id="first"
              value={first}
              onChange={handleChangeFirst}
            ></input>
          </div>
          <div className="KanbanModal-input-container">
            <div className="KanbanModel-input-label">
              <label htmlFor="user">
                {props.second}
              </label>
            </div>
            <input
              className="KanbanModal-input"
              type="text"
              name="second"
              id="second"
              value={second}
              onChange={handleChangeSecond}
            ></input>
          </div>
          <div className="KanbanModal-input-container">
            <div className="KanbanModel-input-label">
              <label htmlFor="user">
                {props.third}
              </label>
            </div>
            <input
              className="KanbanModal-input"
              type="text"
              name="third"
              id="third"
              value={third}
              onChange={handleChangeThird}
            ></input>
          </div>
          <button
            className="KanbanModal-input-submit-btn"
            onClick={props.closeModal}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default KanbanPopup;
