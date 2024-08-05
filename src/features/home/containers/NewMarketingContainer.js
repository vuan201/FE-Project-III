import React from "react";
import { PiTruckDuotone } from "react-icons/pi";
import { MdCreditScore } from "react-icons/md";
import { GiCardExchange } from "react-icons/gi";
import { Sliders } from "../../../components";
import { marketingContainerSettings } from "../../../config";

const DATA = [
  {
    icon: (className) => <PiTruckDuotone className={className} />,
    title: "Miễn phí vận chuyển",
    description: "Bạn sẽ yêu thích ở mức giá tuyệt vời nhất",
  },
  {
    icon: (className) => <MdCreditScore className={className} />,
    title: "Thanh toán linh hoạt",
    description: "Thanh toán bằng nhiều thẻ tín dụng",
  },
  {
    icon: (className) => <GiCardExchange className={className} />,
    title: "Đổi trả trong 14 ngày",
    description: " Trong vòng 30 ngày kể từ thời điểm nhận hàng",
  },
];

const NewMarketingContainer = () => {
  return (
    <div className="max-w-container mx-auto w-full px-12 py-20">
      <div className="hidden md:grid grid-cols-3 gap-8">
        {DATA.map((it, index) => (
          <div className="text-center" key={index}>
            {it.icon("size-12 mx-auto mb-6")}

            <p className="uppercase text-sm font-bold mb-3">{it.title}</p>
            <p className="mt-0.5 text-sm text-[#545454]">{it.description}</p>
          </div>
        ))}
      </div>

      <div className="block md:hidden">
        <Sliders settings={marketingContainerSettings}>
          {DATA.map((it, index) => (
            <div className="text-center pb-6" key={index}>
              {it.icon("size-12 mx-auto mb-6")}

              <p className="uppercase text-sm font-bold mb-3">{it.title}</p>
              <p className="mt-0.5 text-sm text-[#545454]">{it.description}</p>
            </div>
          ))}
        </Sliders>
      </div>
    </div>
  );
};

export default NewMarketingContainer;
