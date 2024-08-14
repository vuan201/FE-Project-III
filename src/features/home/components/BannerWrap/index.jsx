import React from "react";
import clsx from "clsx";
import { Image, CustomLink } from "../../../../components";
import "./BannerWrap.css";

const BannerWrap = (prop) => {
  const { top, bottom } = prop;
  const { image, name, title, description, url } = prop.data;

  const childrenClass = clsx("text-white text-left place-self-center", {
    "md:justify-self-start md:self-start": top,
    "md:justify-self-start md:self-end": bottom,
  });

  return (
    <div className={"bannerWrapItem relative w-full h-full overflow-hidden"}>
      <Image data={{ image: image, name: name }} />
      <div
        className={
          "grid w-full h-full absolute p-11 left-0 top-0 bottom-0 right-0"
        }
      >
        <div className={childrenClass}>
          <h3 className="title mb-3">{title}</h3>
          {description ? (
            <p className="description mb-5">{description}</p>
          ) : undefined}
          <CustomLink
            textLight
            url="/collections"
            bottomLine
            textDark
            iconEndText
          >
            Tới bộ sưu tập
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default BannerWrap;
