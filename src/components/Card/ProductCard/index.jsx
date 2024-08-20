import { React, memo, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, Image, Swatchs } from "../../";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { priceConvert } from "../../../utils/priceConvert";
import { MdAddShoppingCart } from "react-icons/md";
import { FaHeartCirclePlus, FaHeartCircleXmark } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";

import "./ProductCard.css";
import clsx from "clsx";

const ProductCard = ({ data, padding }) => {
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
    )
      setImageSelector(groupedItems[imageSelector.color][1]);
  };

  const handleOnMouseOut = () => {
    if (imageSelector.url !== groupedItems[imageSelector.color][0].url) {
      setImageSelector(groupedItems[imageSelector.color][0]);
    }
  };

  return (
    <div className={clsx("card", { "px-4": padding })}>
      <div className="cardImage block relative z-1 w-full aspect-square cardShadow rounded-md overflow-hidden">
        {discount ?? (
          <div className="absolute top-1 right-1 bg-red-600 text-white">
            {/* <span>-30%</span> */}
          </div>
        )}
        <Link
          onClick={(e) => handleClick(e)}
          onMouseUp={(e) => handleClick(e)}
          onMouseMove={() => setMouseMoved(true)}
          onMouseDown={() => setMouseMoved(false)}
          onMouseOver={() => handleOnMouseOver()}
          onMouseOut={() => handleOnMouseOut()}
        >
          <TransitionGroup>
            <CSSTransition
              key={imageSelector.url}
              timeout={300}
              classNames="fade"
            >
              <Image data={{ image: imageSelector.url, name: name }} />
            </CSSTransition>
          </TransitionGroup>
        </Link>
        <div className="my-2 absolute bottom-0 w-full">
          <div className="flex justify-center gap-4">
            <div className="cardIcon cardIcon-1 shadow-md">
              <Button white>
                <MdAddShoppingCart />
              </Button>
            </div>
            <div className="cardIcon cardIcon-2 shadow-md">
              <Button white>
                <FaHeartCirclePlus />
              </Button>
            </div>
            <div className="cardIcon cardIcon-3 shadow-md">
              <Button white>
                <LuEye />
              </Button>
            </div>
          </div>
        </div>
      </div>
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
            className="text-black hover:text-red-600 transition"
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
