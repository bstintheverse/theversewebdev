// styling
import "./Button.scss";

interface ButtonProps {
    className: string;
    type?: "button" | "submit" | "reset";
    children: string;
};

export default function Button({ className, type = "button", children }: ButtonProps): JSX.Element {
    return (
        <button className={className} type={type}>
            {children}
        </button>
    );
};