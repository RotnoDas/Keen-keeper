import { Outlet } from "react-router";
import Header from "../../components/header/Header";

const RootLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default RootLayout;