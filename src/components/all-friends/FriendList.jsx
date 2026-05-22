import { use } from "react";
import Friend from "./Friend";

const FriendList = ({ allFriends }) => {
    const allFriendsData = use(allFriends);
    return (
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 pb-20 pt-4">
            {
                allFriendsData.map((friend) => {
                    return (
                        <div key={friend.id}>
                            <Friend friend={friend}></Friend>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default FriendList;