import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./ActionAreaCard.scss";
// components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
;
export default function ActionAreaCard({ className, image, alt, content }) {
    return (_jsx(Card, { className: className, sx: {
            maxWidth: {
                xs: 345,
                sm: 300,
                md: 300,
                lg: 255
            },
            width: {
                sm: 300,
                md: 300,
                lg: 255
            }
        }, children: _jsxs(CardActionArea, { children: [_jsx(CardMedia, { component: "img", height: "140", image: image, alt: alt }), _jsx(CardContent, { children: _jsx(Typography, { className: "action-area-card__font", children: content }) })] }) }));
}
;
