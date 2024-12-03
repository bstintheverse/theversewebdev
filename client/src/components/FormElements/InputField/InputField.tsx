// styling
import { ChangeEvent } from "react";
import "./InputField.scss";

interface InputFieldProps {
    className: string;
    name: string;
    value: string;
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({ className, name, value, placeholder, onChange}: InputFieldProps): JSX.Element {
    return (
        <input
            className={`input-field ${className}`}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
};