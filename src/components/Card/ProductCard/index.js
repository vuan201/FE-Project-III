import { React, memo, useState } from "react";
import "./ProductCard.css";
import Button from "../../Button";
import Swatchs from "../../Swatchs";
import Image from "../../Image";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const {id, name,description,brand, price ,colors,categories, className } = data;

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
        <div className="cardInfomation1 cardShadow">
          <div className="sale">
            <span>-30%</span>
          </div>
          <Image data={{image:colors[0].imageUrls, name:name}} />
          <div className="cardBtn">
            <Button black blueBtn>mua hàng</Button>
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
      </div>
    </div>
  );
};

export default memo(ProductCard);
