export const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePreve = () => window.addEventListener("beforeunload", listener);
  const disablePreve = () =>
    window.removedEventListener("beforeunload", listener);
  return { enablePreve, disablePreve };
};
