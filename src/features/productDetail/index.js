import React from "react";
import { Breadcrumbs } from "../../components";
import { useParams } from "react-router";
import { ProductInfomation, ProductSlideImage } from "./containers";
const ProductDetail = () => {
  const obj = {
    id: 100,
    name: "Incredible Wooden Keyboard",
    description: "Sed quaerat quae.",
    price: 189553.9769763586,
    slug: "incredible-wooden-keyboard",
    brand: "brand 2",
    categories: [
      "category 1",
      "category 2",
      "category 4",
      "category 5",
      "category 10",
    ],
    createdAt: "2024-07-10T21:32:25.548123",
    options: [
      {
        sku: "100color-1023",
        color: "xanh lục bảo",
        size: "23",
        quantity: 24,
        createAt: "2024-07-10T21:32:29.292478",
      },
      {
        sku: "100color-1023",
        color: "xanh lục bảo",
        size: "24",
        quantity: 25,
        createAt: "2024-07-10T21:32:29.292478",
      },
      {
        sku: "100color-1023",
        color: "xanh lục bảo",
        size: "25",
        quantity: 26,
        createAt: "2024-07-10T21:32:29.292478",
      },
      {
        sku: "100color-1023",
        color: "xanh lục bảo",
        size: "26",
        quantity: 27,
        createAt: "2024-07-10T21:32:29.292478",
      },
      {
        sku: "100color-522",
        color: "color 5",
        size: "22",
        quantity: 192,
        createAt: "2024-07-10T21:32:29.303516",
      },
      {
        sku: "100color-522",
        color: "color 5",
        size: "23",
        quantity: 192,
        createAt: "2024-07-10T21:32:29.303516",
      },
      {
        sku: "100color-522",
        color: "color 5",
        size: "24",
        quantity: 192,
        createAt: "2024-07-10T21:32:29.303516",
      },
      {
        sku: "100color-926",
        color: "color 9",
        size: "26",
        quantity: 197,
        createAt: "2024-07-10T21:32:29.281928",
      },
      {
        sku: "100color-926",
        color: "color 9",
        size: "27",
        quantity: 197,
        createAt: "2024-07-10T21:32:29.281928",
      },
      {
        sku: "100color-926",
        color: "color 9",
        size: "28",
        quantity: 197,
        createAt: "2024-07-10T21:32:29.281928",
      },
      {
        sku: "100color-926",
        color: "color 9",
        size: "29",
        quantity: 197,
        createAt: "2024-07-10T21:32:29.281928",
      },
    ],
    images: [
      {
        url: "https://cdn.pixabay.com/photo/2018/10/13/05/24/shoes-men-3743513_640.jpg",
        color: "color 9",
      },
      {
        url: "https://cdn.pixabay.com/photo/2018/10/13/05/24/shoes-men-3743513_640.jpg",
        color: "color 9",
      },
      {
        url: "https://cdn.pixabay.com/photo/2018/10/13/05/24/shoes-men-3743513_640.jpg",
        color: "color 9",
      },
      {
        url: "https://cdn.pixabay.com/photo/2018/10/13/05/24/shoes-men-3743513_640.jpg",
        color: "xanh lục bảo",
      },
      {
        url: "https://cdn.pixabay.com/photo/2018/10/13/05/24/shoes-men-3743513_640.jpg",
        color: "xanh lục bảo",
      },
      {
        url: "https://cdn.pixabay.com/photo/2018/10/13/05/24/shoes-men-3743513_640.jpg",
        color: "xanh lục bảo",
      },
      {
        url: "https://cdn.pixabay.com/photo/2018/10/13/05/24/shoes-men-3743513_640.jpg",
        color: "color 5",
      },
      {
        url: "https://cdn.pixabay.com/photo/2018/10/13/05/24/shoes-men-3743513_640.jpg",
        color: "color 5",
      },
      {
        url: "https://cdn.pixabay.com/photo/2018/10/13/05/24/shoes-men-3743513_640.jpg",
        color: "color 5",
      },
    ],
  };

  const newObj = Object.groupBy(obj.options, ({ color }) => color);

  // console.log(newObj);
  // Object.keys(newObj).forEach((key) => {
  //   console.log('-----------------');
  //   // console.log(`${key} ${newObj[key].map((item) => console.log(item))}`);
  //   newObj[key].map((item) => console.log(item));
  // });

  const { slug } = useParams();

  return (
    <div className="mx-auto mb-10 px-12">
      <div className="w-full m-auto max-w-container">
        <Breadcrumbs />

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <div className="w-full h-full">
            <ProductSlideImage />
          </div>
          <div className="w-full h-full">
            <ProductInfomation data={obj}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
