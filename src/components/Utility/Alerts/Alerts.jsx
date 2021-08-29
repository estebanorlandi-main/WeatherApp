import React from "react";
import "./Alerts.css";

export default function Alerts({ alert }) {
  return (
    <div className={`alert ${alert.type}`}>
      <p>{alert.message}</p>
    </div>
  );
}
