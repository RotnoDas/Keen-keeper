import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { context } from "../../components/context/ContextCreate";

const Timeline = () => {
    const { timelineData } = useContext(context);
    return (
        <div className="px-61.25 py-20 bg-[#F8FAFC] min-h-screen">
            <h1 className="geist font-bold text-[48px] leading-[auto] tracking-[0%] text-[#1F2937]">Timeline</h1>
            <div className="dropdown dropdown-bottom w-87.5">
                <div tabIndex={0} role="button" className="btn m-1 p-4 rounded-lg bg-[#FFFFFF] border border-[#E9E9E9] flex items-center justify-between">
                    <p className="geist font-normal text-[18px] leading-[auto] tracking-[0%] text-[#64748B]">Filter timeline</p>
                    <IoIosArrowDown className="text-[18px] text-[#64748B]"/>
                </div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-80 p-2 shadow-sm">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className="mt-6">
                {
                    timelineData.map((data, index) => {
                        return (
                            <div key={index} className="p-4 bg-[#FFFFFF] border border-[#E9E9E9] rounded-lg shadow-md flex items-center gap-5 mb-4">
                                <div>
                                    <img src={data.image} alt="Type image"></img>
                                </div>
                                <div>
                                    <p className="geist font-normal text-[18px] leading-[auto] tracking-[0%] text-[#64748B]"><span className="geist font-bold text-[20px] leading-[auto] tracking-[0%] text-[#244D3F]">{data.type}</span> with {data.name}</p>
                                    <p className="geist font-medium text-[16px] leading-[auto] tracking-[0%] text-[#64748B]">{data.date}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Timeline;