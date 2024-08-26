import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaChevronDown,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { logoApp } from "../../config";
import Select from "./IconFotter/index";
import ScrollToTopBtn from "../../utils/ScrollToTopBtn";

const Footer = () => {
  const location = useLocation();

  const handleClick = (event) => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
      event.preventDefault();
    }
  };
  return (
    <footer className="bg-[#f5f5f5] text-[#545454]">
      <div className="max-w-container mx-auto w-full px-12">
        <div className="border-b border-b-[#8686861f] pt-20 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Link className="h-10 mb-10 block" to={"/"} onClick={handleClick}>
              <img src={logoApp.url} alt="Logo" className="h-full" />
            </Link>

            <ul className="text-sm leading-relaxed">
              <li className="mb-2 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-sm text-black" />
                <strong>
                  VTC Online Building 18 Đ. Tam Trinh,
                  <br /> Mai Động, Hai Bà Trưng, Hà Nội
                </strong>
              </li>
              <li className="mb-2 flex items-center">
                <FaEnvelope className="mr-2 text-sm text-black" />
                <strong>qmshop@gmail.com.vn</strong>
              </li>
              <li className="mb-1 flex items-center">
                <FaPhone className="mr-2 text-sm text-black" />
                <strong>
                  0365087570 <br /> Thứ 2 - Chủ nhật: 9:00 - 18:00{" "}
                </strong>
              </li>
            </ul>

            <div className="mt-6 flex gap-2 flex-wrap">
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="size-8 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="size-8 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                className="size-8 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com"
                target="_blank"
                className="size-8 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]"
              >
                <FaTiktok />
              </a>

              <a
                href="https://www.pinterest.com"
                target="_blank"
                className="size-8 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]"
              >
                <FaPinterest />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-medium text-black">
              CHÍNH SÁCH MUA HÀNG
            </h3>

            <ul>
              <li className="mb-[10px] text-sm">
                <Link to="/privacy-policy" className="hover:text-[#db1215]">
                  Chính sách bảo mật thông tin
                </Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link to="/warranty-policy" className="hover:text-[#db1215]">
                  Chính sách bảo hành và đổi trả hàng
                </Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link to="/payment-policy" className="hover:text-[#db1215]">
                  Chính sách thanh toán
                </Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link to="/delivery-policy" className="hover:text-[#db1215]">
                  Chính sách giao hàng và kiểm hàng
                </Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">
                  Chính sách xử lý khiếu nại
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-medium text-black">
              CÂU CHUYỆN VỀ QM SHOP
            </h3>

            <ul>
              <li className="mb-[10px] text-sm">
                <Link to="/story" className="hover:text-[#db1215]">
                  Giới thiệu
                </Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto w-full px-6 py-4 flex justify-between flex-col gap-4 items-center md:flex-row">
        <p className="text-sm">© 2024 QM Shop, Inc. All rights reserved.</p>

        <div className="flex items-center gap-x-2">
          {/* <img src="/svg/visa.svg" alt="Visa" className="h-[30px]" />
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
          /> */}
          <a href="https://moit.gov.vn/" target="_blank">
            <img
              src="https://bizweb.dktcdn.net/100/394/646/themes/902388/assets/logo_bct.png?1723626210045"
              alt="Bộ Công Thương Logo"
              className="w-28 h-auto"
            />
          </a>
          <ScrollToTopBtn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
