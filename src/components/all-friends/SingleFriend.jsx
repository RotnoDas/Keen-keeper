import { useContext, useEffect } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoArchiveSharp, IoVideocam } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { RiDeleteBin6Line, RiNotificationSnoozeLine } from "react-icons/ri";
import { context } from "../context/ContextCreate";
import Loading from "../loading/Loading";
import call from "../../assets/images/call.png";
import text from "../../assets/images/text.png";
import video from "../../assets/images/video.png";
import { toast, Zoom } from "react-toastify";

const SingleFriend = ({ friend }) => {
    const { loading, setLoading, timelineData, setTimelineData } = useContext(context);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    })
    if(loading) {
        return (
            <div className="flex items-center justify-center h-[80vh]">
                <Loading></Loading>
            </div>
        )
    }
    const handlePhone = (friend) => {
        const phoneData = {
            image: call,
            type: "Call",
            name: friend.name,
            date: new Date().toLocaleDateString("en-US", {
                month: "long", 
                day: "numeric", 
                year: "numeric"
            })
        }
        toast.success(`Call with ${friend.name}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            });
        if(timelineData.length === 0) {
            setTimelineData([phoneData]);
        } else {
            setTimelineData([...timelineData, phoneData]);
        }
    }
    const handleText = (friend) => {
        const textData = {
            image: text,
            type: "Text",
            name: friend.name,
            date: new Date().toLocaleDateString("en-US", {
                month: "long", 
                day: "numeric", 
                year: "numeric"
            })
        }
        toast.success(`Text with ${friend.name}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            });
        if(timelineData.length === 0) {
            setTimelineData([textData]);
        } else {
            setTimelineData([...timelineData, textData]);
        }
    }
    const handleVideo = (friend) => {
        const videoData = {
            image: video,
            type: "Video",
            name: friend.name,
            date: new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
            })
        }
        toast.success(`Video with ${friend.name}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
            });
        if(timelineData.length === 0) {
            setTimelineData([videoData]);
        } else {
            setTimelineData([...timelineData, videoData]);
        }
    }
    return (
        <div className="flex max-sm:flex-col sm:flex-col md:flex-col lg:flex-row items-center justify-center gap-6">
            <div className="flex flex-col gap-4">
                <div className="p-6 rounded-lg bg-[#FFFFFF] shadow-md flex flex-col items-center gap-2">
                    <img src={friend.picture} alt="User Image" className="rounded-full w-20 h-20"></img>
                    <h1 className="geist font-semibold text-[20px] leading-[auto] tracking-[0%] text-[#1F2937]">{friend.name}</h1>
                    <p className={`${friend.status === "almost due"
                            ? "bg-[#EFAD44]"
                            :
                            friend.status === "overdue"
                            ? "bg-[#EF4444]"
                            :
                            friend.status === "on-track"
                            ? "bg-[#244D3F]"
                            :
                            null
                    } p-2 rounded-[100px] geist font-medium text-[12px] leading-[100%] tracking-[0%] text-[#FFFFFF]`}>{friend.status}</p>
                    <div className="flex gap-2">
                        {
                            friend.tags.map((tag, index) => {
                                return (
                                    <p key={index} className="p-2 rounded-[100px] bg-[#CBFADB] geist font-medium text-[12px] leading-[100%] tracking-[0%] text-[#244D3F]">{tag}</p>
                                )
                            })
                        }
                    </div>
                    <p className="inter font-medium italic text-[16px] leading-[100%] tracking-[0%] text-[#64748B]">"{friend.bio}"</p>
                    <p className="geist font-normal text-[14px] leading-[100%] tracking-[0%] text-[#64748B]">Preferred email: {friend.email}</p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#E9E9E9] shadow-md">
                    <p className="flex items-center justify-center gap-2 geist font-medium text-[16px] leading-[auto] tracking-[0%] text-[#1F2937]"><RiNotificationSnoozeLine />Snooze 2 Weeks</p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#E9E9E9] shadow-md">
                    <p className="flex items-center justify-center gap-2 geist font-medium text-[16px] leading-[auto] tracking-[0%] text-[#1F2937]"><IoArchiveSharp />Archive</p>
                </div>
                <div className="px-4 py-2 rounded-lg bg-[#FFFFFF] border border-[#E9E9E9] shadow-md">
                    <p className="flex items-center justify-center gap-2 geist font-medium text-[16px] leading-[auto] tracking-[0%] text-[#EF4444]"><RiDeleteBin6Line />Delete</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 max-sm:w-full">
                <div className="flex items-center max-sm:flex-col sm:flex-row max-sm:gap-1 sm:gap-1 md:gap-2 lg:gap-6">
                    <div className="flex flex-col items-center gap-1 px-4 py-5 rounded-lg bg-[#FFFFFF] border border-[#E9E9E9] shadow-md max-sm:w-full">
                        <h1 className="geist font-semibold text-[30px] leading-[auto] tracking-[0%] text-[#244D3F]">{friend.days_since_contact}</h1>
                        <p className="geist font-normal text-[18px] leading-[auto] tracking-[0%] text-[#64748B]">Days Since Contact</p>
                    </div>
                    <div className="flex flex-col items-center gap-1 px-4 py-5 rounded-lg bg-[#FFFFFF] border border-[#E9E9E9] shadow-md max-sm:w-full">
                        <h1 className="geist font-semibold text-[30px] leading-[auto] tracking-[0%] text-[#244D3F]">{friend.goal}</h1>
                        <p className="geist font-normal text-[18px] leading-[auto] tracking-[0%] text-[#64748B]">Goal (Days)</p>
                    </div>
                    <div className="flex flex-col items-center gap-1 px-4 py-5 rounded-lg bg-[#FFFFFF] border border-[#E9E9E9] shadow-md max-sm:w-full">
                        <h1 className="geist font-semibold text-[30px] leading-[auto] tracking-[0%] text-[#244D3F]">{friend.next_due_date}</h1>
                        <p className="geist font-normal text-[18px] leading-[auto] tracking-[0%] text-[#64748B]">Next Due</p>
                    </div>
                </div>
                <div className="p-6 rounded-lg bg-[#FFFFFF] border border-[#E9E9E9] shadow-md space-y-4">
                    <div className="flex items-center justify-between">
                        <p className="geist font-medium text-[20px] leading-[auto] tracking-[0%] text-[#244D3F]">Relationship Goal</p>
                        <button className="btn geist font-medium text-[14px] leading-[auto] tracking-[0%] text-[#1F2937]">Edit</button>
                    </div>
                    <p className="geist font-normal text-[18px] leading-[auto] tracking-[0%] text-[#64748B]">Connect every <span className="geist font-bold text-[18px] leading-[auto] tracking-[0%] text-[#1F2937]">30 days</span></p>
                </div>
                <div className="p-6 rounded-lg bg-[#FFFFFF] border border-[#E9E9E9] shadow-md space-y-4">
                    <p className="geist font-medium text-[20px] leading-[auto] tracking-[0%] text-[#244D3F]">Quick Check-In</p>
                    <div className="flex items-center justify-between">
                        <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E9E9E9] flex flex-col items-center justify-center gap-2 w-[30%] cursor-pointer" onClick={() => handlePhone(friend)}>
                            <FaPhoneVolume />
                            <p className="geist font-normal text-[18px] leading-[auto] tracking-[0%] text-[#1F2937]">Call</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E9E9E9] flex flex-col items-center justify-center gap-2 w-[30%] cursor-pointer" onClick={() => handleText(friend)}>
                            <MdOutlineTextsms />
                            <p className="geist font-normal text-[18px] leading-[auto] tracking-[0%] text-[#1F2937]">Text</p>
                        </div>
                        <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E9E9E9] flex flex-col items-center justify-center gap-2 w-[30%] cursor-pointer" onClick={() => handleVideo(friend)}>
                            <IoVideocam />
                            <p className="geist font-normal text-[18px] leading-[auto] tracking-[0%] text-[#1F2937]">Video</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleFriend;