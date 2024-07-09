import { Search } from "../search/Search"
import "./banner.css"
export const Banner = () => {
    return (
        <div className="banner pt-5 px-2">
            <div className="pt-5 col-6">
                <h2>مجموعه ای عظیم</h2>
                <h2 className="d-inline">از</h2>
                <h2 className="text-primary-100 d-inline pb-2"> بهترین کتاب ها</h2>
                <p className="pt-2">در سایت خرید آنلاین سرای کتاب می‌توانید به صورت غیرحضوری و تنها با چند کلیک ساده، کتاب مورد علاقه خود را سفارش دهید</p>
            </div>
            <div className="col-md-5 mt-5">
                <Search />
            </div>
        </div>
    )
}