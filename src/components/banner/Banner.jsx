import { FaPlus } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="max-sm:px-1 sm:px-2 md:px-3 lg:px-5 xl:px-61.25 max-sm:py-3 sm:py-5 md:py-7 lg:py-20 bg-[#F8FAFC] space-y-10">
            <div className="flex flex-col justify-center items-center w-full">
                <h1 className="geist font-bold text-[48px] leading-[auto] tracking-[0%] text-[#1F2937] mb-4">Friends to keep close in your life</h1>
                <p className="geist font-normal text-[16px] leading-[auto] tracking-[0%] text-[#64748B] mb-8">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <button className="px-4 py-3 rounded-sm bg-[#244D3F] flex items-center gap-1 geist font-semibold text-[16px] leading-[auto] tracking-[0%] text-[#FFFFFF] mb-8"><FaPlus />Add a Friend</button>
                <div className="flex max-sm:flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-between gap-6 w-full">
                    <div className="p-8 flex flex-col items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#FFFFFF] w-1/4 shadow-md max-sm:w-full sm:w-1/4 md:w-1/4 lg:w-1/4 h-full">
                        <h1 className="geist font-semibold text-[32px] leading-[auto] tracking-[0%] text-[#244D3F]">10</h1>
                        <p className="geist font-normal text-[16px] leading-[auto] tracking-[0%] text-[#64748B]">Total Friends</p>
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#FFFFFF] w-1/4 shadow-md max-sm:w-full sm:w-1/4 md:w-1/4 lg:w-1/4 h-full">
                        <h1 className="geist font-semibold text-[32px] leading-[auto] tracking-[0%] text-[#244D3F]">3</h1>
                        <p className="geist font-normal text-[16px] leading-[auto] tracking-[0%] text-[#64748B]">On Track</p>
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#FFFFFF] w-1/4 shadow-md max-sm:w-full sm:w-1/4 md:w-1/4 lg:w-1/4 h-full">
                        <h1 className="geist font-semibold text-[32px] leading-[auto] tracking-[0%] text-[#244D3F]">6</h1>
                        <p className="geist font-normal text-[16px] leading-[auto] tracking-[0%] text-[#64748B]">Need Attention</p>
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center rounded-lg bg-[#FFFFFF] border border-[#FFFFFF] w-1/4 shadow-md max-sm:w-full sm:w-1/4 md:w-1/4 lg:w-1/4 h-full">
                        <h1 className="geist font-semibold text-[32px] leading-[auto] tracking-[0%] text-[#244D3F]">12</h1>
                        <p className="geist font-normal text-[16px] leading-[auto] tracking-[0%] text-[#64748B]">Interactions This Month</p>
                    </div>
                </div>
            </div>
            <hr className="border-[#E9E9E9] w-full"></hr>
        </div>
    );
};

export default Banner;