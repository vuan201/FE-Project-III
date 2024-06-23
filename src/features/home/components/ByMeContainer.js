import React from "react";
import {NextLink, Image} from "../../../components";
import { frame } from "../../../config";

const ByMeContainer = () => {
  const byMe = {
    intro: "GIỚI THIỆU VỀ CHÚNG TÔI",
    title: "MỘT NƠI ƯU TIÊN DỊCH VỤ CHO PHONG CÁCH ĐƯƠNG ĐẠI",
    detail:
      "Được xuất phát từ văn hóa đường phố Amsterdam, chúng tôi luôn ủng hộ các sáng kiến địa phương, các nghệ sĩ và vận động viên ngay từ những ngày đầu. Chúng tôi làm việc trong các dự án hợp tác độc đáo với cả thương hiệu địa phương và quốc tế, tổ chức các sự kiện và buổi tiệc thường xuyên tại các cửa hàng của chúng tôi cho cộng đồng. Đó là điều mà chúng tôi sẽ tiếp tục thực hiện dù ở bất kỳ đâu.",
  };

  return (
    <div className="mb-10 px-12 pb-12">
      <div className="w-full max-w-container mx-auto">
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
          <div className="col-span-1">
            <div className="relative overflow-hidden">
              <div className="flex flex-row gap-8">
                <div className="basis-1/2">
                  <Image data={frame[1]} animation />
                </div>
                <div className="basis-1/2">
                  <Image data={frame[2]} animation />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 text-left self-center">
            <h5 className="pb-4">{byMe.intro}</h5>
            <h2 className="title pb-4">{byMe.title}</h2>
            <p className="pb-4">{byMe.detail}</p>
            <NextLink dark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ByMeContainer;
