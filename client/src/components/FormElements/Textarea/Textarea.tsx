import { ChangeEvent } from "react";
import "./Textarea.scss";

interface textareaProps {
    className: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Textarea({ className, name, value, placeholder, onChange }: textareaProps): JSX.Element {
    return (
        <textarea 
            className={`textarea ${className}`}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
};