import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const RootLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;