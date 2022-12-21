import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    isActive: false,
    alertMessage: "",
  });

  const setAlert = (alertMessage) => {
    const changeStart = { isActive: true, alertMessage: alertMessage };
    setAlertState(changeStart);
  };

  const closeAlert = () => {
    const changeReverse = { isActive: false };
    setAlertState(changeReverse);
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
