import { jsx as _jsx } from "react/jsx-runtime";
// styling
import "./Button.scss";
;
export default function Button({ className, type = "button", children }) {
    return (_jsx("button", { className: className, type: type, children: children }));
}
;
