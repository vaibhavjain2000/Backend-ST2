import React from "react";
import "./ShowData.css";

function ShowData({ data, handleOpenDialog }) {
  return (
    <div className="showData">
      {data?.map((userData) => {
        return (
          <div
            className="showData__container"
            onClick={() => handleOpenDialog(userData?._id)}
          >
            <div className="showData__data showData__name">
              {userData?.name}
            </div>
            <div className="showData__data showData__mobile">
              {userData?.mobile}
            </div>
            <div className="showData__data showData__email">
              {userData?.email}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowData;
