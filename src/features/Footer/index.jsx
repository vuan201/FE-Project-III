import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { logoApp } from "../../config";
import IconFotter from "./IconFotter";
import { CustomLink } from "../../components";

const Footer = () => {
  const icons = [
    <FaFacebookF />,
    <FaXTwitter />,
    <FaInstagram />,
    <FaTiktok />,
    <FaPinterest />,
  ];

  const listHelpPage = [
    { name: "Chính sách bảo hành", url: "/privacy-policy" },
    { name: "Chính sách khách hàng thân thiết", url: "" },
    { name: "Chính sách bảo vệ thông tin khách hàng", url: "" },
    { name: "Trạng thái đơn hàng", url: "" },
    { name: "HÌnh thức giao hàng", url: "" },
    { name: "Hình thức thanh toán", url: "" },
    { name: "Hướng dẫn cách chọn Size", url: "" },
  ];

  const listByShopPage = [
    { name: "Câu chuyện về chúng tôi", url: "" },
    { name: "Hoạt động", url: "" },
    { name: "Liên hệ", url: "" },
  ];

  return (
    <footer className="bg-[#f5f5f5] text-[#545454] mt-auto">
      <div className="max-w-container mx-auto w-full px-12">
        <div className="border-b border-b-[#8686861f] pt-20 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Link className="h-10 mb-10 block" to={"/"}>
              <img src={logoApp.url} alt="Logo" className="h-full" />
            </Link>

            <ul className="text-sm leading-relaxed">
              <li className="mb-1">Địa chỉ: VTC Online Building</li>
              <li className="mb-1">
                Email: <strong>QMShop@gmail.com</strong>
              </li>
              <li className="mb-1">
                Phone: <strong>0365087570</strong>
              </li>
            </ul>

            <ul className="mt-6 flex gap-2 flex-wrap">
              {icons.map((icon, index) => (
                <li key={index}>
                  <IconFotter>{icon}</IconFotter>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-medium text-black">TRỢ GIÚP</h3>

            <ul className="text-sm">
              {listHelpPage.map((help, index) => (
                <li key={index} className="mb-3">
                  <CustomLink url={help.url ?? undefined}>
                    {help.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-medium text-black">Về QM SHOP</h3>

            <ul className="text-sm">
              {listByShopPage.map((byShop, index) => (
                <li key={index} className="mb-3">
                  <CustomLink url={byShop.url ?? undefined}>
                    {byShop.name}
                  </CustomLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-medium text-black">
              Đăng ký nhận bản tin
            </h3>

            <p className="text-sm mt-8">
              Để nhận các thông tin mới từ QM Shop cũng như các chương trình
              khuyến mãi hấp dẫn
            </p>

            <form
              action=""
              className="flex items-center border border-[#ebebeb] mt-6 h-14 bg-white rounded px-3"
            >
              <input
                type="text"
                placeholder="Vui lòng nhập email của bạn"
                className="flex-1 outline-none pr-3 text-sm"
              />

              <button className="flex items-center gap-x-1 bg-black rounded h-10 text-white justify-center px-3 text-sm font-semibold cursor-pointer">
                ĐĂNG KÝ
                <HiOutlineExternalLink />
              </button>
            </form>

            <div className="flex gap-x-6 mt-8"></div>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto w-full px-12 py-6 flex justify-between flex-col gap-4 items-center md:flex-row">
        <p className="text-sm">
          © 2024 QM Shop. Powered by Haravan Enterprise.
        </p>

        <div className="flex items-center gap-x-2">
          <img src="/svg/visa.svg" alt="Visa" className="h-[30px]" />
          <img src="/svg/paypal.svg" alt="Paypal" className="h-[30px]" />
          <img
            src="/svg/mastercard.svg"
            alt="Mastercard"
            className="h-[30px]"
          />
          <img
            src="/svg/american-express.svg"
            alt="American express"
            className="h-[30px]"
          />
          <img
            src="/svg/diners-club.svg"
            alt="Diners club"
            className="h-[30px]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
