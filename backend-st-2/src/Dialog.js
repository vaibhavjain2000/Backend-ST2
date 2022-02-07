import React from "react";
import Button from "./components/Button";
import "./Dialog.css";

function Dialog({ handleContactDelete }) {
  return (
    <dialog className="dialog">
      <div className="dialog__question">
        Are you sure you want to delete this contact?
      </div>
      <div className="dialog__button_container">
        <Button onClick={() => handleContactDelete(false)}>No</Button>
        <Button onClick={() => handleContactDelete(true)}>Yes</Button>
      </div>
    </dialog>
  );
}

export default Dialog;
