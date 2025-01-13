// styling
import "./ActionAreaCard.scss";

// components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// types
interface ActionAreaCardProps {
    className: string;
    image: string;
    alt: string;
    content: string;
};

export default function ActionAreaCard({ className, image, alt, content }: ActionAreaCardProps): JSX.Element {
    return (
        <Card 
            className={className} 
            sx={{
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
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt={alt}
                />
                <CardContent>
                    <Typography className="action-area-card__font">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};