import { useEffect, useState } from "react";
import { context } from "./ContextCreate";

const ContextProvider = ({ children }) => {
    const [friendsData, setFriendsData] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch("/data.json");
                const data = await response.json();
                setFriendsData(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <context.Provider value={friendsData}>
            {children}
        </context.Provider>
    );
};

export default ContextProvider;