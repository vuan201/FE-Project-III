import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPinterest,
  FaChevronDown,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { logoApp } from "../../config";
import Select from "./select";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-[#545454]">
      <div className="max-w-container mx-auto w-full px-12">
        <div className="border-b border-b-[#8686861f] pt-20 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <Link className="h-10 mb-10 block" to={"/"}>
              <img src={logoApp.url} alt="Logo" className="h-full" />
            </Link>

            <ul className="text-sm leading-relaxed">
              <li className="mb-1">
                Address: 1234 Fashion Street, Suite 567, New York, NY 10001
              </li>
              <li className="mb-1">
                Email: <strong>info@fashionshop.com</strong>
              </li>
              <li className="mb-1">
                Phone: <strong>(212)555-1234</strong>
              </li>
            </ul>

            <Link
              href=""
              className="inline-flex items-center gap-x-1 mt-4 border-b border-black pb-1"
            >
              <p className="text-black text-sm font-bold">Get direction</p>

              <HiOutlineExternalLink className="text-black" />
            </Link>

            <div className="mt-6 flex gap-2 flex-wrap">
              <Link className="size-10 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]">
                <FaFacebookF />
              </Link>
              <Link className="size-10 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]">
                <FaXTwitter />
              </Link>
              <Link className="size-10 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]">
                <FaInstagram />
              </Link>
              <Link className="size-10 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]">
                <FaTiktok />
              </Link>
              <Link className="size-10 flex items-center justify-center border border-black text-black rounded-full transition-all hover:border-[#fe2c55] hover:text-[#fe2c55]">
                <FaPinterest />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-medium text-black">Help</h3>

            <ul>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">Privacy Policy</Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">
                  Returns + Exchanges
                </Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">Shipping</Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">Terms & Conditions</Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">FAQ’s</Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">Compare</Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">My Wishlist</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-medium text-black">About Us</h3>

            <ul>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">Our Story</Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">Visit Our Store</Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">Contact Us</Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">About Us</Link>
              </li>
              <li className="mb-[10px] text-sm">
                <Link className="hover:text-[#db1215]">Account</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4 font-medium text-black">
              Sign Up for Email
            </h3>

            <p className="text-sm mt-8">
              Sign up to get first dibs on new arrivals, sales, exclusive
              content, events and more!
            </p>

            <form
              action=""
              className="flex items-center border border-[#ebebeb] mt-6 h-14 bg-white rounded px-3"
            >
              <input
                type="text"
                placeholder="Enter email address"
                className="flex-1 outline-none pr-3 text-sm"
              />

              <button className="flex items-center gap-x-1 bg-black rounded h-10 text-white justify-center px-3 text-sm font-semibold cursor-pointer">
                Subscribe
                <HiOutlineExternalLink />
              </button>
            </form>

            <div className="flex gap-x-6 mt-8">
              <Select
                options={[
                  {
                    label: (
                      <p className="text-sm text-black cursor-pointer hover:text-[#db1215]">
                        EUR | France
                      </p>
                    ),
                  },
                  {
                    label: (
                      <p className="text-sm text-black cursor-pointer hover:text-[#db1215]">
                        EUR | Germany
                      </p>
                    ),
                  },
                  {
                    label: (
                      <p className="text-sm text-black cursor-pointer hover:text-[#db1215]">
                        USD | United state
                      </p>
                    ),
                  },
                  {
                    label: (
                      <p className="text-sm text-black cursor-pointer hover:text-[#db1215]">
                        VND | Vietnam
                      </p>
                    ),
                  },
                ]}
              >
                <div className="flex items-center gap-x-3 cursor-pointer">
                  <p className="text-sm text-black">USD</p>

                  <FaChevronDown className="text-xs" />
                </div>
              </Select>

              <Select
                options={[
                  {
                    label: (
                      <p className="text-sm text-black cursor-pointer hover:text-[#db1215]">
                        English
                      </p>
                    ),
                  },
                  {
                    label: (
                      <p className="text-sm text-black cursor-pointer hover:text-[#db1215]">
                        Vietnam
                      </p>
                    ),
                  },
                ]}
              >
                <div className="flex items-center gap-x-3 cursor-pointer">
                  <p className="text-sm text-black">English</p>

                  <FaChevronDown className="text-xs" />
                </div>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container mx-auto w-full px-12 py-6 flex justify-between flex-col gap-4 items-center md:flex-row">
        <p className="text-sm">© 2024 Ecomus . All rights reserved.</p>

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
