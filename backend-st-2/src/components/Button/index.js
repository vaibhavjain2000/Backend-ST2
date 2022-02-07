import React from "react";
import "./index.css";
import Add from "@mui/icons-material/Add";

function Button(props) {
  return (
    <div className="button" {...props}>
      {props.children ? (
        props.children
      ) : (
        <>
          <Add /> Add Contact
        </>
      )}
    </div>
  );
}

export default Button;
