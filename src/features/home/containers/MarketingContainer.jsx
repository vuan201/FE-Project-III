import React from "react";
import { GiCardExchange } from "react-icons/gi";
import { PiTruckDuotone } from "react-icons/pi";
import { MdCreditScore } from "react-icons/md";

import { Container, Sliders } from "../../../components";
import { marketingContainerSettings } from "../../../config";
const MarketingContainer = () => {
  const icons = [
    {
      icon: <PiTruckDuotone className="w-full h-full" />,
      title: "Miễn phí vận chuyển",
      description: "Bạn sẽ yêu thích với mức giá cực kỳ thấp",
    },
    {
      icon: <MdCreditScore className="w-full h-full" />,
      title: "Thanh toán linh hoạt",
      description: "Thanh toán bằng nhiều thẻ tín dụng.",
    },
    {
      icon: <GiCardExchange className="w-full h-full" />,
      title: "đổi trả trong 14 ngày",
      description: "Trong vòng 14 ngày để đổi hàng.",
    },
  ];

  return (
    <Container>
      <div className="py-20">
        <Sliders settings={marketingContainerSettings}>
          {icons.map((icon, index) => (
            <div key={index} className="w-full h-full text-center mx-5">
              <div className="m-auto w-[40px] h-[40px] mb-4 ">{icon.icon}</div>
              <h5 className="uppercase text-lg mb-4">{icon.title}</h5>
              <p className="pb-4">{icon.description}</p>
            </div>
          ))}
        </Sliders>
      </div>
    </Container>
  );
};

export default MarketingContainer;
