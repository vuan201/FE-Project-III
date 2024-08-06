import React from "react";
import { Image } from "../../../../components";
import { logoApp } from "../../../../config";
const Logo = () => {
  return (
    <>
      <Image data={{ image: logoApp.url, name: logoApp.name }} />
    </>
  );
};

export default Logo;
