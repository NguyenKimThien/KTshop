import "./style.scss";
import { AiFillMail, AiOutlineShoppingCart } from "react-icons/ai";
import { FaFacebook, FaTelegram, FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import formater from "../../../../utils/formater";
import ROUTERS from "../../../../utils/router";
const Header = () => {
  const [menu, setMenu] = useState([
    {
      name: "TRANG CHỦ",
      path: ROUTERS.HOME,
    },
    {
      name: "CỬA HÀNG",
      path: ROUTERS.SHOP,
    },
    {
      name: "SẢN PHẨM",
      path: ROUTERS.PRODUCT,
      isShowSubMenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
        {
          name: "Đồ ăn nhanh",
          path: "",
        },
      ],
    },
    {
      name: "BÀI VIẾT",
      path: ROUTERS.BLOG,
    },
    {
      name: "LIÊN HỆ",
      path: ROUTERS.CONTACT,
    },
  ]);
  return (
    <header className="header">
      <div className="header_top">
        <div className="container header_top-main">
          <div className="header_top-left">
            <AiFillMail />
            <span>thien3103ht@gmail.com</span> |
            <span>Miễn phí ship từ {formater(200000)}</span>
          </div>
          <div className="header_top-right">
            <FaFacebook />
            <RiInstagramFill />
            <FaTelegram />
            <FaTiktok />
            <div className="account">
              <VscAccount />
              <a href="">
                <span>Đăng nhập</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__logo">
              <h1>KT SHOP</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                {menu?.map((itemMenu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""} >
                    <a href={itemMenu.path} key={menuKey}>{itemMenu.name}</a>
                    {itemMenu.child && (
                        <ul className="header__menu__dropdown">
                            {itemMenu.child.map((itemChild, childKey) => (
                            <li key={childKey}>
                                <a href={itemChild.path} key={childKey}>{itemChild.name}</a>
                            </li>
                            ))}
                        </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header__cart">
              <div className="header__cart__price">
                <span>{formater(12376636)}</span>
              </div>
              <div className="header__cart__icon">
                <AiOutlineShoppingCart />
                <span className="header__cart__icon__number">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
