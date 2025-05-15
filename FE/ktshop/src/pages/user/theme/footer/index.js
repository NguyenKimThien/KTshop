import "./style.scss";
import {AiOutlineLinkedin,AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer__about">
              <h1 className="footer__about__logo">KT SHOP</h1>
              <ul>
                <li>Địa chỉ : 772 kim giang-Hà Nội</li>
                <li>SDT : +84937768938</li>
                <li>Email : thien3103ht@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer__widget">
              <h5>GIỚI THIỆU</h5>
              <ul>
                <li>
                  <a href="">Liên hệ</a>
                </li>
                <li>
                  <a href="">Thông tin về chúng tôi</a>
                </li>
                <li>
                  <a href="">Sản phẩm kinh doanh</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="">Liên hệ</a>
                </li>
                <li>
                  <a href="">Thông tin về chúng tôi</a>
                </li>
                <li>
                  <a href="">Sản phẩm kinh doanh</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer__voucher">
              <h5>KHUYẾN MÃI & ƯU ĐÃI</h5>
              <p>Đăng ký thông tin tại đây</p>
              <form className="footer__voucher__form" action="#">
                <input type="text" placeholder="Nhập email của bạn" />
                <button type="submit">Đăng ký</button>
              </form>
              <div className="footer__social">
                <AiOutlineFacebook/>
                <AiOutlineLinkedin/>
                <AiOutlineInstagram/>
                <AiOutlineTwitter/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
