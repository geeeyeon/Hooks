import React, { useEffect, useState, useRef } from "react";

export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") return;
  const handle = (event) => {
    console.log(event);
    onBefore();
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
