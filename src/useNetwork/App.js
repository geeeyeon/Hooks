import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    // eslint-disable-next-line no-unused-expressions
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

export default function App() {
  const handleNetworkChagne = (online) => {
    console.log(online ? "온라인" : "오프라인");
  };
  const online = useNetwork();
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
}
