import React from "react";
import { GiCardExchange } from "react-icons/gi";
import { PiTruckDuotone } from "react-icons/pi";
import { MdCreditScore } from "react-icons/md";

import { Sliders } from "../../../components";
import { marketingContainerSettings } from "../../../config";
const MarketingContainer = () => {
  const descriptions = [
    {
      title: "Miễn phí vận chuyển",
      description: "Bạn sẽ yêu thích với mức giá cực kỳ thấp",
    },
    {
      title: "Thanh toán linh hoạt",
      description: "Thanh toán bằng nhiều thẻ tín dụng.",
    },
    {
      title: "đổi trả trong 14 ngày",
      description: "Trong vòng 14 ngày để đổi hàng.",
    },
  ];

  const icons = [
    <PiTruckDuotone className="w-full h-full" />,
    <MdCreditScore className="w-full h-full" />,
    <GiCardExchange className="w-full h-full" />,
  ];
  return (
    <div className="mb-10 px-12 pb-12">
      <div className="w-full max-w-container mx-auto pt-24 pb-15">
        <Sliders settings={marketingContainerSettings}>
          {icons.map((icon, index) => (
            <div key={index} className="w-full h-full text-center mx-5">
              <div className="m-auto w-[40px] h-[40px] mb-4 ">{icon}</div>
              <h5 className="uppercase text-lg mb-4">
                {descriptions[index].title}
              </h5>
              <p className="pb-4">{descriptions[index].description}</p>
            </div>
          ))}
        </Sliders>
      </div>
    </div>
  );
};

export default MarketingContainer;
