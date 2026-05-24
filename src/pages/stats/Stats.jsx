import { useContext } from "react";
import Chart from "./Chart";
import { context } from "../../components/context/ContextCreate";
import NoAnalytics from "./NoAnalytics";

const Stats = () => {
    const { timelineData} = useContext(context);
    return (
        <div className="max-sm:px-1 sm:px-2 md:px-3 lg:px-5 xl:px-61.25 py-20 bg-[#F8FAFC] min-h-screen">
            <div>
                <h1 className="geist font-bold max-sm:text-[32px] sm:text-[48px] leading-[auto] tracking-[0%] text-[#1F2937]">Friendship Analytics</h1>
                <div>
                    {
                        timelineData.length === 0
                        ? <NoAnalytics></NoAnalytics>
                        : <div className="p-8 mt-8 rounded-lg bg-[#FFFFFF] shadow-md border border-[#FFFFFF]">
                                <p className="geist font-bold text-[20px] leading-[auto] tracking-[0%] text-[#244D3F]">By Interaction Type</p>
                                <div className="mt-6 flex items-center justify-center">
                                    <Chart></Chart>
                                </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Stats;