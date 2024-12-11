// styling
import { ChangeEvent } from "react";
import "./InputField.scss";

interface InputFieldProps {
    className: string;
    type?: "text" | "email";
    name: string;
    value: string;
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({ className, type = "text", name, value, placeholder, onChange}: InputFieldProps): JSX.Element {
    return (
        <input
            className={`input-field ${className}`}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
};