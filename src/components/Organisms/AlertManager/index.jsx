import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import Alert from "../../Atoms/Alert";
import React, { useEffect } from "react";

const AlertManager = () => {
  const AlertHandlerContext = useAlertHandlerContext();
  useEffect(() => {
    if (AlertHandlerContext.isActive === true) {
      setTimeout(() => {
        AlertHandlerContext.closeAlert();
      }, 5000);
    }
  }, [AlertHandlerContext]);

  return (
    <Alert
      alertMessage={AlertHandlerContext.alertMessage}
      isActive={AlertHandlerContext.isActive}
    />
  );
};
export default AlertManager;
