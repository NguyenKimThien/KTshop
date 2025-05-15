import "./style.scss"
import { AiFillMail } from "react-icons/ai";
import { FaFacebook,FaTelegram,FaTiktok   } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import formater from "../../../../utils/formater";
const Header = () => {
    return (
        <div className="header_top">
            <div className="container header_top-main">
                <div className="header_top-left">
                    <AiFillMail/>
                    <span>thien3103ht@gmail.com</span> | 
                    <span>Miễn phí ship từ {formater(200000)}</span>
                </div>
                <div className="header_top-right">
                    <FaFacebook/>
                    <RiInstagramFill/>
                    <FaTelegram/>
                    <FaTiktok/>
                    <div className="account">
                        <VscAccount/>
                        <a href=""><span>Đăng nhập</span></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;