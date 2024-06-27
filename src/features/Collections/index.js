import React, { useState } from "react";
import { Overlay } from "../../components";
import Breadcrumbs from "./components/BannerCollections";

import Sort from "./container/Sort";

const Collections = () => {
  const [overlay, setOverlay] = useState(true);

  const handleSetOverlay = () => {
    setOverlay(!overlay);
  };

  return (
    <div className="content w-full m-auto">
      <Breadcrumbs />
      <div className="px-8">
        <div className="m-auto flex justify-between w-full max-w-container">
          <div className="">1</div>
          <div className="">2</div>
          <div className="">
            <Sort />
          </div>
        </div>
      </div>
      <Overlay isOverlay={overlay} onClick={handleSetOverlay} />
    </div>
  );
};

export default Collections;
