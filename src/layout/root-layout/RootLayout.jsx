import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ToastContainer, Zoom } from "react-toastify";

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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Zoom}
                />
        </div>
    );
};

export default RootLayout;