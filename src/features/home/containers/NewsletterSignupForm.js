import React from "react";
import { newsletterSignupForm } from "../../../config";
import { Button, Image, Input } from "../../../components";
const NewsletterSignupForm = () => {
  return (
    <div className="relative overflow-hidden bg-white w-full h-full pb-[130px] pt-[104px] text-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 z-2">
        <Image data={newsletterSignupForm} />
      </div>
      <div className="relative flex">
        <div className="z-2 relative px-12 max-w-container w-full m-auto">
          <div className="max-w-[950px] bg-white flex flex-col m-auto p-5 md:p-28">
            <h5 className="title mb-4">
              BECOME PART <br /> OF THE ECOMUS DISTRICT{" "}
            </h5>
            <p className="mb-4">
              Promotions, new products and sales. Directly to your inbox
            </p>
            <div className="w-full mb-4">
              <form method="post" action="">
                <div className="w-full flex flex-row items-center">
                  <div className="basis-3/4">
                    <Input />
                  </div>
                  <div className="basis-1/4">
                    <Button afterAnimation>Đăng ký</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignupForm;
