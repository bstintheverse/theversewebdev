interface Header {
    id: number;
    title: string;
    subheaders?: Subheader[];
    content: string | string[];
    assets?: Asset[];
};

interface Subheader {
    id: number;
    title: string;
    content?: string;
    items?: ListItem[];
    assets?: Asset[];
};

interface ListItem {
    id: number;
    content: string;
};

interface Asset {
    id: number;
    type: "image" | "video";
    src: string;
    alt?: string;    
};

interface KarmaInfoProp {
    headers: Header[];
};

export const karmaInfo: KarmaInfoProp = {
    headers: [
        {
            id: 1,
            title: "Discover Your Path Through the Six Realms",
            content: [
                "Karma The Six Realm Game gamifies and playifies prosocial and mindfulness mechanics in a compelling and immersive game narrative. In Buddhism, the Six Realms are not considered - literal places, but metaphors for the varying daily psychological states of the human mind. Not everyone goes through the six realms the Same Way.",
                "The Journey through the six realms is a Journey through the mind. We are starting with mini prosocial games that evaluate a player's prosociality, like a prosocial personality test. These prosocial mini games will determine what realm a player spawns into."
            ],
            subheaders: [
                {
                    id: 1,
                    title: "Six Realms of Existence",
                    content: "Players are born into one of the six realms of existence.",
                    items: [
                        {
                            id: 1,
                            content: "God realm - a world of ecstasy, beauty and pleasure."
                        },
                        {
                            id: 2,
                            content: "Demi God realm - a world of violence, envy, and jealousy.",
                        },
                        {
                            id: 3,
                            content: "Human realm - a world of purpose, aspirations, and possibilities."
                        },
                        {
                            id: 4,
                            content: "Animal realm - a world of instincts, survival, and self preservations"
                        },
                        {
                            id: 5,
                            content: "Ghost realm - a world of neediness, addictions, and compulsions."
                        },
                        {
                            id: 6,
                            content: "Hell realm - a world of agony, terror, and depression."
                        }
                    ],
                    assets: [
                        {
                            id: 1,
                            type: "image",
                            src: "/",
                            alt: "image placeholder"
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            title: "Karmic Score Determines Your Realm",
            content: "Our current PS Mini Games is F-E-S where players interact with 3 classes of characters. Based on players' Karmic Score (psychological survey and game play), players are born into one of the six realms of existence (God, Demi-God, Human, Animal, Ghost, Hell) where they employ our human ability to “tend and befriend” to solve challenges and move on to the next levels.",
            assets: [
                {
                    id: 1,
                    type: "image",
                    src: "/",
                    alt: "image placeholder"
                }
            ]
        },
        {
            id: 3,
            title: "What's Your Take on the Six Realms?",
            content: [
                "Feel free to think beyond the traditional interpretations and bring your own unique perspective to each realm. We’re excited to see how you can help translate these ancient concepts into relatable, meaningful reflections on our daily lives and interactions.",
                "We want you to join us in this social activity; translating Buddhist cosmology into your unique experiences. How would you “skin” the 6 Realms? Artistic? Media? Political? Historic? Science Fiction?"
            ],
            assets: [
                {
                    id: 1,
                    type: "image",
                    src: "/",
                    alt: "image placeholder"
                },
                {
                    id: 2,
                    type: "image",
                    src: "/",
                    alt: "image placeholder"
                }
            ]
        }
    ]
};