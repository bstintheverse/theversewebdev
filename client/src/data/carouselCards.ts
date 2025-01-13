interface CarouselCardProps {
    id: number;
    image: string;
    alt: string;
};

const imagePath = "/assets/images/cards/carousel-cards"

export const carouselCards: CarouselCardProps[] = [
    {
        id: 1,
        image: `${imagePath}/carousel-card-karma.png`,
        alt: "Karma"
    }, 
    {
        id: 2,
        image: `${imagePath}/carousel-card-aib.png`,
        alt: "Adventures in Breath"
    },
    {
        id: 3,
        image: `${imagePath}/carousel-card-walkxr.png`,
        alt: "WalkXR"
    },
    {
        id: 4,
        image: `${imagePath}/carousel-card-testimonial1.png`,
        alt: "Testimonial 1"
    },
    {
        id: 5,
        image: `${imagePath}/carousel-card-testimonial2.png`,
        alt: "Testimonial 2"
    }
];