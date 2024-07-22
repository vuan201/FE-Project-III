import { React, memo, useEffect, useState } from "react";
import "./ProductCard.css";
import { Button, Image, Swatchs } from "../../";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { name, price, images, slug } = data;
  const [image, setImage] = useState("");

  useEffect(() => {
    if (images[0] && images[0].url) setImage(images[0].url);
  }, []);

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
        <div className="cardInfomation1 cardShadow">
          <div className="sale">{/* <span>-30%</span> */}</div>
          <Image data={{ image: image, name: name }} />
          {/* <div className="cardBtn">
            <Button black blueBtn>mua hàng</Button>
          </div> */}
        </div>
      </Link>
      <div className="cardInfomation2">
        <div className="cardTitle">
          <Link
            className="productTitle"
            onClick={(e) => handleClick(e)}
            onMouseUp={(e) => handleClick(e)}
            onMouseMove={() => setMouseMoved(true)}
            onMouseDown={() => setMouseMoved(false)}
          >
            {name}
          </Link>
        </div>
        <div className="cardPrice">
          <span>₫</span>
          <span>{price}</span>
        </div>
      </div>
      <div className="cardColors">{/* <Swatchs swatchs={colors} /> */}</div>
    </div>
  );
};

export default memo(ProductCard);
