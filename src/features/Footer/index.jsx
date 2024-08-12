import clsx from "clsx";
import React, { useState, useEffect } from "react";

function Footer() {
  // const [dateTime, setDateTime] = useState(new Date());
  // const className = clsx(
  //   "w-full bg-white-50 text-black text-center py-4",
  //   "border-t-1 border-line-border"
  // );

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setDateTime(new Date());
  //   }, 1000);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <footer className={'className'}>
      {/* {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()} */}
    </footer>
  );
}

export default Footer;
