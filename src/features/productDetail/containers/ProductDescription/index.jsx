import React, { useState } from "react";
import TabInfomations from "../../components/TabInfomations";
const ProductDescription = ({ data }) => {
  const { name, description, brand, categories, options, slug } = data;
  const [showInfomation, setInfomation] = useState(0);

  // Lấy ra các giá trị duy nhất của size và màu và sau đó chuyển nó thành một chuỗi được cách nhau bởi dấu ,
  const color = Object.keys(Object.groupBy(options, ({ color }) => color));
  const size = Object.keys(Object.groupBy(options, ({ size }) => size));

  const tabs = ["Thông tin sản phẩm", "Mô tả sản phẩm", "Đánh giá"];

  const detailInfomation = [
    { info: "Tên", value: name },
    { info: "Đến từ", value: brand },
    { info: "Tag", value: categories.join(", ") },
    { info: "Các màu của sản phẩm", value: color.join(", ") },
    { info: "Các size của sản phẩm", value: size.join(", ") },
  ];

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex gap-4 text-center">
        {tabs.map((tab, index) => (
          <li key={index}>
            <TabInfomations
              tab={tab}
              active={index === showInfomation}
              onClick={() => setInfomation(index)}
            />
          </li>
        ))}
      </ul>
      <div>
        {showInfomation === 0 && (
          <ul className="flex flex-col gap-2 ">
            {detailInfomation.map(({ info, value }) => (
              <li key={info} className="flex justify-between ">
                <div>{info}</div>
                <div>{value}</div>
              </li>
            ))}
          </ul>
        )}
        {showInfomation === 1 && <div>{description}</div>}
      </div>
    </div>
  );
};

export default ProductDescription;
