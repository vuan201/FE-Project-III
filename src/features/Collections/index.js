import React, { useState } from "react";
import { Overlay } from "../../components";
import Breadcrumbs from "./components/BannerCollections";

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
