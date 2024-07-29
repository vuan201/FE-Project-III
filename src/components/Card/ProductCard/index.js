import { React, memo, useEffect, useState } from "react";
import "./ProductCard.css";
import { Button, Image, Swatchs } from "../../";
import { Link, useNavigate } from "react-router-dom";
import { priceConvert } from "../../../utils/priceConvert";
const ProductCard = ({ data }) => {
  const { name, images, slug, options, discount } = data;

  const [image, setImage] = useState("");

  useEffect(() => {
    if (images[0] && images[0].url) setImage(images[0].url);
  }, []);

  // Nhóm các đối tượng theo category
  const groupedItems = images.reduce((group, item) => {
    const { color } = item;
    group[color] = group[color] ?? [];
    group[color].push(item);
    return group;
  }, {});
  // Lấy phần tử đầu tiên của mỗi nhóm
  const firstItems = Object.entries(groupedItems).map(
    ([category, items]) => items[0]
  );

  console.log(firstItems);

  const [mouseMoved, setMouseMoved] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.button === 0)
      if (!mouseMoved) {
        navigate(`/products/${slug}`);
      }
  };

  return (
    <div className={"card px-4"}>
      <Link
        onClick={(e) => handleClick(e)}
        onMouseUp={(e) => handleClick(e)}
        onMouseMove={() => setMouseMoved(true)}
        onMouseDown={() => setMouseMoved(false)}
      >
        <div className="block relative z-1 w-full aspect-square cardShadow">
          {discount ?? (
            <div className="absolute top-1 right-1 bg-red-600 text-white">
              {/* <span>-30%</span> */}
            </div>
          )}
          <Image data={{ image: image, name: name }} />
        </div>
      </Link>
      <div className="my-5">
        <div className="text-xl productTitle">
          <Link
            className="text-black hover:underline hover:text-blue-800 transition-all"
            onClick={(e) => handleClick(e)}
            onMouseUp={(e) => handleClick(e)}
            onMouseMove={() => setMouseMoved(true)}
            onMouseDown={() => setMouseMoved(false)}
          >
            {name}
          </Link>
        </div>
        <div className="flex gap-1 items-center text-red-600 text-xl">
          <span>{priceConvert(options[0].price)}</span>
          <span>₫</span>
        </div>
      </div>
      <div className="my-5">
        <Swatchs
          swatchs={firstItems}
          imageSelector={image}
          setImageSelector={setImage}
          isLimit={false}
          // limit={3}
        />
      </div>
    </div>
  );
};

export default memo(ProductCard);
