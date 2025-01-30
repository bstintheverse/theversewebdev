// for aib game page
interface Header {
    id: number;
    title: string;
    subheader?: Subheader[];
    content?: string;
    assets?: Asset[];
};

interface Subheader {
    id: number;
    title: string;
    content: string;
    assets?: Asset[];
};

interface Asset {
    id: number;
    type: "image" | "video";
    src: string;
    alt?: string;
};

interface AdventuresInBreathInfoProp {
    headers: Header[];
};

const imagePath: string = "/assets/images/games/adventures-in-breath/";

export const AdventuresInBreathInfo: AdventuresInBreathInfoProp = {
    headers: [
        {
            id: 1,
            title: "Turn Every Breath Into a Journey",
            content: "At Adventures in Breath, we gamify breathing practices to enhance health and wellbeing. Our mission is to make mindfulness fun and accessible for everyone. By combining engaging gameplay with scientifically-backed techniques, we help users improve their mental and physical health, reduce stress, and boost overall wellness. Venture on an adventure through the rich world of AiB, showcasing a diverse array of games, concepts, and imaginative ideas where breath serves as the core mechanic, whether it's navigating mystical landscapes or outmaneuvering adversaries.",
            assets: [
                {
                    id: 1,
                    type: "image",
                    src: `${imagePath}aib-map.png`,
                    alt: "image placeholder"
                }
            ]
        },
        {   // add additional metadata once design is finalized
            id: 2,
            title: "Ready. Set. Breathe.",
            content: "Our games are built on scientifically validated breath techniques, and use the player's breathing as the means of interaction within the game.  Through our games, digital experiences, and innovative concepts, we gamify therapeutic breath practices, creating engaging and immersive experiences that promote mindfulness and well-being."

        },
        {
            id: 3,
            title: "Play With Purpose, Breathe With Impact",
            content: "Discover games where your breath guides the journey. Explore unique worlds, unlock mysteries, and experience the power of mindful interaction."
        }
    ]
}

// ----- for aib game trailer cards ----- 
interface CardGame {
    id: number;
    title: string;
    content: string | string[];
    assets: CardAsset[];
};

interface CardAsset {
    id: number;
    type: "image" | "video";
    image: string;
    video?: string;
    alt?: string;
};

interface CardProp {
    games: CardGame[];
};

const cardImagePath: string = "/assets/images/games/adventures-in-breath"

export const AdventuresInBreathGames: CardProp = {
    games: [
        {
            id: 1,
            title: "Sailbreath",
            content: [
                "Sail through captivating seas, as the guiding force behind a small boat with every breath. Overcome challenges like storms, rogue waves, and maelstroms by mastering the art of breath control.",
                "Experience the thrill of navigating diverse environments in this unique adventure."
            ],
            assets: [
                {
                    id: 1,
                    type: "image",
                    image: `${cardImagePath}/sail-breath/sail-breath-1.png`,
                    alt: "Screenshot of the game Sailbreath, depicting a river with a stone wall on each side."
                },
                {
                    id: 2,
                    type: "image",
                    image: `${cardImagePath}/sail-breath/sail-breath-2.png`,
                    alt: "Screenshot of the game Sailbreath, depicting a river with yellow stone columns rising out of the water on the side."
                },
                {
                    id: 3,
                    type: "image",
                    image: `${cardImagePath}/sail-breath/sail-breath-bg.jpg`
                }
            ]
        },
        {
            id: 1,
            title: "Worlds",
            content: [
                "Eddy’s adventure in WORLDS is just getting started!",
                "After crash-landing in a mysterious, scorching land, Eddy the Beaver has to rely on his instincts and courage to survive. From his first steps out of the parachute box to building his lodge and restoring the environment, you’ll be right there to guide him through every challenge!"
            ],
            assets: [
                {
                    id: 1,
                    type: "image",
                    image: `${cardImagePath}/worlds/worlds-1.png`,
                    alt: "Concept art of Eddy, the Beaver and main character of the game Worlds."
                },
                {
                    id: 2,
                    type: "image",
                    image: `${cardImagePath}/worlds/worlds-2.png`,
                    alt: "Image of the world Eddy mysteriously landed into."
                },
                {
                    id: 3,
                    type: "image",
                    image: `${cardImagePath}/worlds/worlds-bg.jpg`
                }
            ]
        },
        {
            id: 3,
            title: "Island Tour",
            content: "Island Tour is a first person immersive breath based game where the player has the ability to explore a variety of oceanic locales while using breathing mechanics in order to traverse these areas. Take control of your character as you try to achieve stars in these different locales offering different wildlife, sounds, and changes in breathing mechanics.",
            assets: [
                {
                    id: 1,
                    type: "image",
                    image: `${cardImagePath}/island-tour/island-tour-1.png`,
                    alt: "Screenshot of an island in Island Tour"
                },
                {
                    id: 2,
                    type: "image",
                    image: `${cardImagePath}/island-tour/island-tour-2.png`,
                    alt: "Screenshot of a coral ravine in Island Tour"
                },                {
                    id: 3,
                    type: "image",
                    image: `${cardImagePath}/island-tour/island-tour-bg.jpg`,
                },
            ]
        }
    ]
};