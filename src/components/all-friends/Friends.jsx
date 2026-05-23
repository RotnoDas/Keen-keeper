import { Suspense } from "react";
import FriendList from "./FriendList";
import Loading from "../loading/Loading";

const Friends = () => {
    const allFriends = fetch("/data.json").then((response) => {
        return response.json();
    })
    return (
        <div className="max-sm:px-1 sm:px-2 md:px-5 lg:px-6 xl:px-61.25 bg-[#F8FAFC]">
            <div>
                <p className="geist font-semibold text-[24px] leading-[auto] tracking-[0%] text-[#1F2937]">Your Friends</p>
            </div>
            <div>
                <Suspense fallback={<div className="flex justify-center items-center h-50">
                    <Loading></Loading>
                </div>}>
                    <div>
                        <FriendList allFriends={allFriends}></FriendList>
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default Friends;