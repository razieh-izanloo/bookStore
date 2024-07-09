import { ButtonProps } from "../../types/ButtonProps";

export const Button = (props: ButtonProps) => {
    const { title, calssName } = props;
    return (
        <button className={`px-4 py-2 rounded-5 border-0 text-white ${calssName}`}>{title}</button>
    )
}