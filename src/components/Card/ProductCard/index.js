import { React, memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Image, Swatchs } from "../../";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { priceConvert } from "../../../utils/priceConvert";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  const { name, images, slug, options, discount } = data;

  const [imageSelector, setImageSelector] = useState({});

  const [mouseMoved, setMouseMoved] = useState(false);
  const [inProp, setInProp] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (images[0]) setImageSelector(images[0]);
  }, []);

  // Nhóm các đối tượng theo category
  const groupedItems = images.reduce((group, item) => {
    const { color } = item;
    group[color] = group[color] ?? [];
    group[color].push(item);
    return group;
  }, {});

  // Lấy phần tử đầu tiên của mỗi nhóm
  const firstItems = Object.entries(groupedItems).map(([color, url]) => url[0]);

  // Tổng số màu và số Size trong sản phẩm
  const totalColors = Object.keys(
    Object.groupBy(options, ({ color }) => color)
  ).length;
  const totalSizes = Object.keys(
    Object.groupBy(options, ({ size }) => size)
  ).length;

  // Xử lý khi người dùng click (fix lỗi khi sử dụng slide của react-Slick)
  const handleClick = (e) => {
    if (e.button === 0)
      if (!mouseMoved) {
        navigate(`/products/${slug}`);
      }
  };

  const handleOnMouseOver = () => {
    if (
      groupedItems &&
      groupedItems[imageSelector.color] &&
      groupedItems[imageSelector.color][1] &&
      groupedItems[imageSelector.color][1].url
    ) {
      setImageSelector(groupedItems[imageSelector.color][1]);
    }
  };

  const handleOnMouseOut = () => {
    if (imageSelector.url !== groupedItems[imageSelector.color][0].url) {
      setImageSelector(groupedItems[imageSelector.color][0]);
    }
  };

  return (
    <div className={"card px-4"}>
      <Link
        onClick={(e) => handleClick(e)}
        onMouseUp={(e) => handleClick(e)}
        onMouseMove={() => setMouseMoved(true)}
        onMouseDown={() => setMouseMoved(false)}
        onMouseOver={() => handleOnMouseOver()}
        onMouseOut={() => handleOnMouseOut()}
      >
        <div className="block relative z-1 w-full aspect-square cardShadow">
          {discount ?? (
            <div className="absolute top-1 right-1 bg-red-600 text-white">
              {/* <span>-30%</span> */}
            </div>
          )}
          <TransitionGroup>
            <CSSTransition
              key={imageSelector.url}
              timeout={300}
              classNames="fade"
            >
              <Image data={{ image: imageSelector.url, name: name }} />
            </CSSTransition>
          </TransitionGroup>
        </div>
      </Link>
      <div className="my-5">
        <div className="flex justify-between gap-1 my-2 ">
          <div className="flex gap-1">
            <span>{totalColors}</span>
            <span>Màu</span>
          </div>
          <div className="flex gap-1">
            <span>{totalSizes}</span>
            <span>Kích thước</span>
          </div>
        </div>
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
          imageSelector={imageSelector}
          setImageSelector={setImageSelector}
          isLimit={false}
          // limit={3}
        />
      </div>
    </div>
  );
};

export default memo(ProductCard);
