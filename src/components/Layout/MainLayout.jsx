import { Outlet } from "react-router-dom";
import Header from "../Home/Header/Header";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import BreakingNews from "../Breaking/BreakingNews";


const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;