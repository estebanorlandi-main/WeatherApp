import React from "react";
import "./Alerts.css";

const alertType = (type) => {
  switch (type) {
    case "error":
      return "error";
  }
};

export default function Alerts({ alert, remove }) {
  return (
    <div onClick={remove} className={`alert ${alert.type}`}>
      <p>{alert.message}</p>
    </div>
  );
}
