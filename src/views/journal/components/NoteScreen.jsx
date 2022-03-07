import React from "react";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <div className="notes__appbar">
        <span>28 de agosto de 2020</span>
        <div>
          <button className="btn btn-outline-light mr-3">Picture</button>
          <button className="btn btn-outline-light">Save</button>
        </div>
      </div>

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          className="notes__text-area"
          placeholder="Write something here"
          rows="5"
        ></textarea>

        <div className="notes__image">
          <img src={require("assets/images/dark-sky.png")} />
        </div>
      </div>
    </div>
  );
};
