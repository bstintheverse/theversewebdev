// type interfaces for aib game page
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

// meta data for aib game page
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

// type interfaces for aib game trailer cards
interface CardHeader {
    id: number;
    title: string;
    content: string | string[];
    assets: CardAsset[];
};

interface CardAsset {
    id: number;
    type: "image" | "video";
    src: string[];
    alt?: string;
};

interface CardProp {
    headers: CardHeader[];
};

// metadata for aib games for trailer cards
export const AdventuresInBreathGames = {

};