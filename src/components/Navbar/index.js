import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdow from "../Dropdow";
import "./Navbar.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBrands,
  fetchCategories,
  selectBrandsError,
  selectBrandsItem,
  selectBrandsStatus,
  selectCategoriesError,
  selectCategoriesItem,
  selectCategoriesStatus,
  setParamsCategory,
} from "../../app/reducers";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // categories
  const categories = useSelector(selectCategoriesItem);
  const categoriesStatus = useSelector(selectCategoriesStatus);
  const categoriesError = useSelector(selectCategoriesError);

  const brands = useSelector(selectBrandsItem);
  const brandsStatus = useSelector(selectBrandsStatus);
  const brandsError = useSelector(selectBrandsError);

  let listCategory = [];
  let listBrands = [];

  useEffect(() => {
    const params = {};

    dispatch(fetchCategories(params));
    dispatch(fetchBrands({}));
  }, [dispatch]);

  const handleGoToCollections = (id, name, slug) => {
    dispatch(setParamsCategory({ id, name }));
    navigate(`/collections/${slug}`);
  };

  // if (categoriesStatus === "succeeded") {
  //   listCategory = categories.map((category) => {
  //     return {
  //       pageName: category.name,
  //       url: `/collections/${category.slug}`,
  //       onClick: () =>
  //         handleGoToCollections(category.id, category.name, category.slug),
  //     };
  //   });
  // }

  if (brandsStatus === "succeeded") {
    listBrands = brands.reduce((acc, brand) => {
      const categoryBrand = categories.find(
        (category) => category.name === brand.name
      );

      if (categoryBrand) {
        acc.push({
          pageName: categoryBrand.name,
          // url: `/collections/${categoryBrand.name}`,
          onClick: () =>
            handleGoToCollections(
              categoryBrand.id,
              categoryBrand.name,
              categoryBrand.slug
            ),
        });
      }

      return acc;
    }, []);
  }
  const listPage = [
    { pageName: "Home", url: "/" },
    { pageName: "Đăng nhập", url: "/login" },
    { pageName: "Đăng ký", url: "/register" },
    { pageName: "Bộ sưu tập", url: "/collections" },
    { pageName: "Giỏ hàng", url: "/cart" },
  ];

  const navItem = clsx(
    "navItem rounded-lg px-4 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 z-10"
  );

  return (
    <nav className="navbar flex justify-left space-x-4 ">
      <div className={navItem}>
        <NavLink to={"/"}>Trang chủ</NavLink>
      </div>
      <div className={navItem}>
        <Dropdow listPage={listPage} itemLeft>
          Trang
        </Dropdow>
      </div>
      <div className={navItem}>
        <Dropdow listPage={listBrands} itemLeft>
          Hãng
        </Dropdow>
      </div>
      {/* <div className={navItem}>
        <Dropdow listPage={listCategory} itemLeft>
          Danh mục
        </Dropdow>
      </div> */}
    </nav>
  );
};

export default Navbar;
