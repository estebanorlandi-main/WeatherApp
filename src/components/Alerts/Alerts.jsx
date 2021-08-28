import React from "react";
import "./Alerts.css";

export default function Alerts({ alert, remove }) {
  return (
    <div onClick={remove} className={`alert ${alert.type}`}>
      <p>{alert.message}</p>
    </div>
  );
}
