import { Link } from "react-router-dom";
import "./index.css";

export const Links = () => {
    const items = [
        { title: "صفحه اصلی", link: "/" },
        { title: "معرفی کتاب", link: "/" },
        { title: "کتاب ها", link: "/" },
        { title: "نوشت افزار", link: "/" },
        { title: "تماس با ما", link: "/" }
    ];

    return (
        <div className="col-md-6 d-flex justify-content-between links">
            {items.map((item, i) => <Link to={item.link} className="text-decoration-none px-1" key={i}>{item.title}</Link>)}
        </div>
    )
}