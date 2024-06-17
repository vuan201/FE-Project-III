import { React, useState, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CategoryCard.css";

const CategoryCard = ({ data }) => {
  const [mouseMoved, setMouseMoved] = useState(false);

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (e.button === 0)
      if (!mouseMoved) {
        navigate("/login");
      }
  };

  const { id, name, image } = data;
  return (
    <div className="card categoryCard mx-4">
      <Link
        onClick={(e) => handleClick(e)}
        onMouseUp={(e) => handleClick(e)}
        onMouseMove={() => setMouseMoved(true)}
        onMouseDown={() => setMouseMoved(false)}
      >
        <div className="cardShadow">
          <img className="image" src={image} />
        </div>
      </Link>
      <div className="categoryCardTitle mb-10 py-6 bg-stone-50">
        <Link
          onClick={(e) => handleClick(e)}
          onMouseUp={(e) => handleClick(e)}
          onMouseMove={() => setMouseMoved(true)}
          onMouseDown={() => setMouseMoved(false)}
        >
          <div className="title my-3">
            <span>{name}</span>
          </div>
        </Link>
        <Link
        className="shopNow block w-40 m-auto"
          onClick={(e) => handleClick(e)}
          onMouseUp={(e) => handleClick(e)}
          onMouseMove={() => setMouseMoved(true)}
          onMouseDown={() => setMouseMoved(false)}
        >
          <div className="shopNow pb-3 px-4 ">
            <p>Mua sắm ngay</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default memo(CategoryCard);
