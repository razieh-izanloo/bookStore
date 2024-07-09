import { Banner } from "../components/banner/banner";
import { Navbar } from "../components/navbar";
import "./header.css";

export const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <Banner />
        </div>
    )
}