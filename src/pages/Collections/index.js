import React, { useState } from "react";
import { Breadcrumbs, Image, Overlay } from "../../components";
import { collectionImage } from "../../config/index";
const Collections = () => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="content w-full m-auto">
      <Breadcrumbs />
      <Overlay isOverlay={overlay} />
      
    </div>
  );
};

export default Collections;
