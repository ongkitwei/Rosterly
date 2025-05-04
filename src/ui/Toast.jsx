import React from "react";

function Toast({ toastText }) {
  return (
    <div className="toast toast-center animate-fade animate-once animate-duration-500">
      <div className="alert alert-success">
        <span className="px-10">{toastText}</span>
      </div>
    </div>
  );
}

export default Toast;
