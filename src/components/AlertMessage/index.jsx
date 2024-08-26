import { Alert } from "@mui/material";
import clsx from "clsx";
import React, { useState } from "react";
import './AlertMessage.css'

const AlertMessage = ({ type, children }) => {
  // type valid: success, info, warning, error

  const [showMeesage, setShowMessage] = useState(true);

  return (
    <div
      className={clsx("alertAnimation fixed top-20 right-8 transition-all duration-500", {
        "opacity-0 translate-x-[120%]": !showMeesage,
        "opacity-100 translate-x-0": showMeesage,
      })}
    >
      <Alert severity={type} onClose={() => setShowMessage(false)}>
        {children}
      </Alert>
    </div>
  );
};

export default AlertMessage;
