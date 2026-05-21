import { NavLink } from "react-router";
import logo from "../../assets/images/logo.png";
import { BiHomeAlt2 } from "react-icons/bi";
import { RiTimeLine } from "react-icons/ri";
import { GoGraph } from "react-icons/go";
import { CiMenuBurger } from "react-icons/ci";

const Header = () => {
    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Timeline",
            path: "/timeline"
        },
        {
            name: "Stats",
            path: "/stats"
        }
    ]
    return (
        <div className="max-sm:px-1 sm:px-2 md:px-3 lg:px-20 py-4 bg-[#FFFFFF] shadow-[#E9E9E9] shadow-sm flex items-center justify-between">
            <div>
                <NavLink to={"/"}>
                    <img src={logo} alt="Logo" />
                </NavLink>
            </div>
            <div>
                <div className="sm:hidden">
                    <details className="dropdown">
                        <summary className="btn m-1"><CiMenuBurger />Menu</summary>
                        <ul className="dropdown-content rounded-box z-1 w-fit shadow-sm bg-[#FFFFFF]">
                            {
                                links.map((link, index) => {
                                    return (
                                        <li key={index}>
                                            <p>
                                                <NavLink to={link.path} className={({ isActive }) => isActive ? "flex items-center gap-1 px-4 py-3 rounded-sm geist font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] bg-[#244D3F]" : "flex items-center gap-1 px-4 py-3 rounded-sm geist font-medium text-[16px] leading-[auto] tracking-[0%] text-[#64748B]"}>
                                                    {link.name}
                                                </NavLink>
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </details>
                </div>
                <ul className="flex items-center gap-4 max-sm:hidden">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index}>
                                    <p>
                                        <NavLink to={link.path} className={({ isActive }) => isActive ? "flex items-center gap-1 px-4 py-3 rounded-sm geist font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] bg-[#244D3F]" : "flex items-center gap-1 px-4 py-3 rounded-sm geist font-medium text-[16px] leading-[auto] tracking-[0%] text-[#64748B]"}>
                                            {
                                                link.name === "Home" ?
                                                    <BiHomeAlt2 /> 
                                                : 
                                                link.name === "Timeline" ?
                                                    <RiTimeLine /> 
                                                : 
                                                link.name === "Stats" ?
                                                    <GoGraph />
                                                :
                                                    <></>
                                            } 
                                            {link.name}
                                        </NavLink>
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;