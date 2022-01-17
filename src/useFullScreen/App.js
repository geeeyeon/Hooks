import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFull, exitFull };
};

export default function App() {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <img
          ref={element}
          src="https://ssl.pstatic.net/imgshopping/cnsv/iu/home/22/0113/ohhspnavnlj.jpg"
        />
        <button onClick={triggerFull}>make fullscreen</button>
        <button onClick={exitFull}>exit fullscreen</button>
      </div>
    </div>
  );
}
