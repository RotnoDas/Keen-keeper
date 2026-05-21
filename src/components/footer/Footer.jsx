import { Link } from "react-router";
import footerLogo from "../../assets/images/logo-xl.png";
import instagram from "../../assets/images/instagram.png";
import facebook from "../../assets/images/facebook.png";
import x from "../../assets/images/twitter.png";
const Footer = () => {
    return (
        <div className="max-sm:px-1 sm:px-2 md:px-3 lg:px-61.25 pt-20 pb-7.5 bg-[#244D3F]">
            <div className="flex flex-col max-sm:items-start sm:items-center gap-5">
                <img src={footerLogo} alt="Logo"></img>
                <p className="geist font-normal text-[16px] leading-6 tracking-[0%] text-[#FFFFFF]/80">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className="geist font-medium text-[20px] leading-7 tracking-[0%] text-[#FFFFFF]">Social Links</p>
                <div className="flex items-center gap-3">
                    <Link to="https://www.instagram.com/">
                        <img src={instagram} alt="instagram"></img>
                    </Link>
                    <Link to="">
                        <img src={facebook} alt="facebook"></img>
                    </Link>
                    <Link to="https://x.com/">
                        <img src={x} alt="x"></img>
                    </Link> 
                </div>
                <hr className="w-full border-[#FFFFFF]/20" />
                <div className="flex max-sm:flex-col max-sm:items-start max-sm:gap-5 max-sm:w-full max-sm:justify-between items-center justify-between w-full">
                    <p className="geist font-normal text-[16px] leading-6 tracking-[0%] text-[#FAFAFA]/50">© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex items-center gap-5">
                        <p className="geist font-normal text-[16px] leading-6 tracking-[0%] text-[#FAFAFA]/50">Privacy Policy</p>
                        <p className="geist font-normal text-[16px] leading-6 tracking-[0%] text-[#FAFAFA]/50">Terms of Services</p>
                        <p className="geist font-normal text-[16px] leading-6 tracking-[0%] text-[#FAFAFA]/50">Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;