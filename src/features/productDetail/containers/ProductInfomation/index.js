import React, { useState } from "react";
import { ImageItem, SizeItem } from "../../components";
const ProductInfomation = ({ data }) => {
  const { name, description, price, brand, categories, options, images } = data;

  const newImages = Object.groupBy(images, ({ color }) => color);
  const [selectOption, setSelectOption] = useState(options[0]);

  return (
    <div>
      <div className="mb-5 ">
        <h2 className="font-normal text-3xl">{name}</h2>
      </div>
      <div className="mb-5">
        <span className="text-red-600 text-3xl">{price}</span>
      </div>
      <div className="mb-5">
        <span>Tình trạng : </span>
        <span className="font-medium">
          {selectOption.quantity > 0 ? (
            <span className="text-blue-700">
              Còn hàng (${selectOption.quantity})
            </span>
          ) : (
            <span className="text-red-500">Hết hàng</span>
          )}
        </span>
      </div>
      <div className="mb-5">
        <span>color: </span>
        <span className="font-bold">{selectOption.color}</span>
      </div>
      <div className="mb-5 flex">
        {Object.keys(newImages).map((key) => (
          <ImageItem key={key} image={newImages[key][0]} isActive={key === selectOption.color}/>
        ))}
      </div>
    </div>
  );
};

export default ProductInfomation;
