import React from "react";
import { Container, Image } from "../../../components";
import { frame } from "../../../config";

const BigBanner = () => {
  return (
    <Container>
      <Image data={frame[0]} />
    </Container>
  );
};

export default BigBanner;
