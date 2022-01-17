import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  const onScroll = () => {
    setState({ x: window.scrollX, Y: window.pageYOffset });
    // console.log("Y", window.pageYOffset, "X", window.scrollX);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return state;
};

export default function App() {
  const { y } = useScroll();
  console.log("-----", y, useScroll());
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Hello
      </h1>
    </div>
  );
}
