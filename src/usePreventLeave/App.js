import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePreve = () => window.addEventListener("beforeunload", listener);
  const disablePreve = () =>
    window.removedEventListener("beforeunload", listener);
  return { enablePreve, disablePreve };
};

export default function App() {
  const { enablePreve, disablePreve } = usePreventLeave();
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={enablePreve}>Protect</button>
      <button onClick={disablePreve}>UnProtect</button>
    </div>
  );
}
