import { useContext } from "react";
import { context } from "../context/ContextCreate";
import { useParams } from "react-router";
import SingleFriend from "./SingleFriend";

const Details = () => {
    const friendsData = useContext(context);
    const id = Number(useParams().id);
    return (
        <div className="max-sm:px-1 sm:px-2 md:px-3 lg:px-5 xl:px-61.25 py-20 bg-[#F8FAFC]">
            {
                friendsData.map((friend) => {
                    if(friend.id === id) {
                        return (
                            <div key={friend.id}>
                                <SingleFriend friend={friend}></SingleFriend>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
};

export default Details;