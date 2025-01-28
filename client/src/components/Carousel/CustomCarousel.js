import { jsx as _jsx } from "react/jsx-runtime";
// components
import { Carousel } from "react-responsive-3d-carousel";
import "react-responsive-3d-carousel/dist/styles.css";
// data
import { carouselCards } from "../..//data/carouselCards";
import { useEffect, useState } from "react";
;
export default function CustomCarousel() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const cardData = carouselCards;
    const items = cardData.map((card) => {
        return (_jsx("img", { className: "carousel__image", src: card.image, alt: card.alt }));
    });
    let width, height, containerWidth, containerHeight, containerPadding, perspective, widthFactor, depthFactor, angleFactor;
    if (windowWidth >= 1280) {
        width = "auto";
        height = "20rem";
        containerWidth = "80vw";
        containerHeight = "auto";
        containerPadding = "2.5rem";
        perspective = 1;
        widthFactor = 1;
        depthFactor = 0.5;
        angleFactor = 0;
    }
    else if (windowWidth >= 768 && windowWidth <= 1279) {
        width = "auto";
        height = "13rem";
        containerWidth = "90vw";
        containerHeight = "auto";
        containerPadding = "0 6.25rem";
        perspective = 1;
        widthFactor = 2;
        depthFactor = 0.5;
        angleFactor = 0;
    }
    else {
        width = "auto";
        height = "8.5rem";
        containerWidth = "90vw";
        containerHeight = "auto";
        containerPadding = "0";
        perspective = 1;
        widthFactor = 1.5;
        depthFactor = 0.5;
        angleFactor = 0;
    }
    const defaultOptions = {
        widthFactor: widthFactor,
        depthFactor: depthFactor,
        angleFactor: angleFactor,
        perspective: perspective
    };
    return (_jsx("div", { className: "carousel", children: _jsx(Carousel, { items: items, startIndex: 0, onChange: (currentIndex) => console.log(currentIndex), showStatus: false, slideWithKeyboard: "horizontal", swipeable: true, swipeDirection: "horizontal", pauseOnHover: true, width: width, height: height, containerWidth: containerWidth, containerHeight: containerHeight, containerPadding: containerPadding, defaultOption: defaultOptions }) }));
}
;
