import React, { useState } from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import { IoCartOutline } from "react-icons/io5";
import { FiHeart, FiShuffle } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";

const IMAGES = [
  "https://picsum.photos/800/800",
  "https://picsum.photos/700/700",
  "https://picsum.photos/650/650",
  "https://picsum.photos/850/850",
  "https://picsum.photos/750/750",
];

const MyProductCard = ({ data }) => {
  
  const { name, price, images, slug } = data;

  const [imageSelected, setImageSelected] = useState(0);

  const onThumbnailHover = (index) => {
    setImageSelected(index);
  };

  return (
    <Link to="Product">
      <div
        style={{ backgroundImage: `url(${IMAGES[imageSelected]})` }}
        className="pt-[100%] bg-cover bg-center bg-no-repeat relative overflow-hidden group"
      >
        <div className="flex gap-x-1 absolute pb-2 bottom-0 w-full justify-center translate-y-full group-hover:translate-y-0 transition-all">
          <div className="w-10 h-10 bg-white shadow-[0_8px_24px_#959da533] flex items-center justify-center cursor-pointer rounded-[4px]">
            <IoCartOutline className="text-xl" />
          </div>
          <div className="w-10 h-10 bg-white shadow-[0_8px_24px_#959da533] flex items-center justify-center cursor-pointer rounded-[4px]">
            <FiHeart className="text-xl" />
          </div>
          <div className="w-10 h-10 bg-white shadow-[0_8px_24px_#959da533] flex items-center justify-center cursor-pointer rounded-[4px]">
            <FiShuffle className="text-xl" />
          </div>
          <div className="w-10 h-10 bg-white shadow-[0_8px_24px_#959da533] flex items-center justify-center cursor-pointer rounded-[4px]">
            <LuEye className="text-xl" />
          </div>
        </div>
      </div>

      <div className="pt-5 flex flex-col gap-y-3">
        <p className="text-left uppercase font-bold">
          Polar Night Pack 2 Fusion 2.0
        </p>

        <div className="flex items-center gap-x-2 text-sm">
          <p className="text-[#0000008c] line-through">$150.00</p>
          <p className="text-[#db1215] font-semibold">$149.95</p>
        </div>

        <div className="flex gap-x-1 justify-center">
          {IMAGES.map((item, index) => (
            <div
              key={index}
              className={clsx(styles.thumbnailWrap, {
                [styles.active]: index === imageSelected,
              })}
              onMouseOver={() => onThumbnailHover(index)}
            >
              <img src={item} alt="Thumbnail" />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default MyProductCard;
