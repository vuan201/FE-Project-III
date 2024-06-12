import { React, memo, useState } from "react";
import "./ProductCard.css";
import Button from "../../Button";
import Swatchs from "../../Swatchs";

import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { category, name, image, colors, price, className, id } = data;
  const cardClassName = clsx(className, "card px-4");
  
  const [mouseMoved, setMouseMoved] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.button === 0)
      if (!mouseMoved) {
        navigate("/login");
      }
  };

  return (
    <div className={cardClassName}>
      <Link
        onClick={(e) => handleClick(e)}
        onMouseUp={(e) => handleClick(e)}
        onMouseMove={() => setMouseMoved(true)}
        onMouseDown={() => setMouseMoved(false)}
      >
        <div className="cardInfomation1 cardShadowImage">
          <div className="sale">
            <span>-30%</span>
          </div>
          <img className="image" src={image} />
          <div className="cardBtn">
            <Button blueBtn>mua hàng</Button>
          </div>
        </div>
      </Link>
      <div className="cardInfomation2">
        <div className="cardTitle">
          <a className="productTitle" href="">
            {name}
          </a>
        </div>
        <div className="cardPrice">
          <span>₫</span>
          <span>{price}</span>
        </div>
      </div>
      <div className="cardColors">
        <Swatchs swatchs={colors}/>
        {/* <ul className="listColor">
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color.code }}
              className="item"
            >
              <div className="clearfix">
                <span className="titleColor">{color.color}</span>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default memo(ProductCard);
