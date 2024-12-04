interface CarouselCardProps {
    id: number;
    image: string;
    alt: string;
};

const imagePath = "/assets/images"

export const carouselCards: CarouselCardProps[] = [
    {
        id: 1,
        image: `${imagePath}/card-karma.png`,
        alt: "Karma"
    }, 
    {
        id: 2,
        image: `${imagePath}/card-aib.png`,
        alt: "Adventures in Breath"
    },
    {
        id: 3,
        image: `${imagePath}/card-walkxr.png`,
        alt: "WalkXR"
    },
    {
        id: 4,
        image: `${imagePath}/card-testimonial1.png`,
        alt: "Testimonial 1"
    },
    {
        id: 5,
        image: `${imagePath}/card-testimonial2.png`,
        alt: "Testimonial 2"
    }
];