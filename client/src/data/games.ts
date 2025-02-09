interface gamesProps {
    id: number;
    name: string;
    image?: string;
    alt?: string;
    video?: string;
    description: string;
    link: string;
};

const imagePath = "/assets/images/games";
const gamePagePath = "/experiences/game";

export const games: gamesProps[] = [
    {
        id: 1,
        name: "WalkXR",
        image: `${imagePath}/walkxr-preview.jpeg`,
        alt: "Screenshot of WalkXR",
        description: "An immersive, interactive game that empowers players to learn, create, and heal through embodied experiences. Currently being built in UE as a first person game. Involves immersive storytelling, interactive gameplay with emotional regulation, rituals, and deep learning.",
        link: `${gamePagePath}/walk-xr`
    },
    {
        id: 2,
        name: "Karma The Six Realms",
        image: `${imagePath}/karma-preview.png`,
        alt: "Screenshot of Karma The Six Realms Gameplay",
        description: "A prosocial exploration through the Buddhist 6 Realms where you are rewarded for being empathetic, altruistic, cooperative and collaborative. It is a prosocial game that primes prosocial behaviour.",
        link: `${gamePagePath}/karma-the-six-realms`
    },
    {
        id: 3,
        name: "Adventures in Breath (AiB)",
        image: `${imagePath}/aib-preview.png`,
        alt: "Screenshot of Adventures in Breath (AiB) Gameplay",
        description: "Games that make you breath. Imagine playing a game like Angry Birds or Temple Run, but instead of traditional controls, you use your breath to move characters and interact with the game environment. Breathe, have fun, and improve your health/well-being.",
        link: `${gamePagePath}/adventures-in-breath`
    }
];