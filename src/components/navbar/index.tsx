import { Link } from "react-router-dom";
import { Button } from "../button/button";
import { Links } from "./links";
import "./index.css";

export const Navbar = () => {
    return (
        <div className="bg-white shadow-sm py-3 d-flex justify-content-between align-items-center px-2">
            <Links />
            <div>
                <Link to="/" className="px-2">
                    <img src="/icon/buy.png" alt="img buy" width="32px" />
                </Link>
                <Button calssName="bg-primary-100"
                    title={<>
                        <Link className="text-white text-decoration-none" to="/">ورود</Link>
                        <span className="px-1">/</span>
                        <Link className="text-white text-decoration-none" to="/">ثبت نام</Link>
                    </>}
                />
            </div>
        </div>
    )
}