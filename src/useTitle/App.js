import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  const titleUpdater = useTitle("loading...");
  setTimeout(() => titleUpdater("home"), 5000);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}
