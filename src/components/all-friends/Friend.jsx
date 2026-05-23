import { Link } from "react-router";

const Friend = ({friend}) => {
    return (
        <Link to={`/friend/${friend.id}`} className="px-6 py-6 rounded-lg bg-[#FFFFFF] shadow-md flex flex-col items-center justify-center gap-2">
            <img src={friend.picture} alt="User Image" className="rounded-full"></img>
            <h1 className="geist font-semibold text-[20px] leading-[auto] tracking-[0%] text-[#1F2937]">{friend.name}</h1>
            <p className="geist font-normal text-[12px] leading-[auto] tracking-[0%] text-[#64748B]">{friend.days_since_contact}d ago</p>
            <div className="flex gap-2">
                {
                    friend.tags.map((tag, index) => {
                        return (
                            <p key={index} className="p-2 rounded-[100px] bg-[#CBFADB] geist font-medium text-[12px] leading-[100%] tracking-[0%] text-[#244D3F]">{tag}</p>
                        )
                    })
                }
            </div>
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
        </Link>
    );
};

export default Friend;