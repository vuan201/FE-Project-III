import { Button } from "@mui/material";
import React from "react";
import "./TabInfomations.css";

const TabInfomations = ({ tab, active, onClick }) => {
  return (
    <div
      className={`tabInfomations relative text-xl text-black ${
        active && "tabInfomationsActive"
      }`}
    >
      <Button variant="text" color="inherit" onClick={onClick}>
        {tab}
      </Button>
    </div>
  );
};

export default TabInfomations;
