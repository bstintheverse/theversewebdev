const guidingPrincipleImagePath = "/assets/images/cards/guiding-principle-cards";
const ourCommunityImagePath = "/assets/images/cards/our-community-cards";

interface guidingPrincipleProps {
    id: number;
    image: string;
    alt: string;
    label: string;
};

interface ourCommunityProps {
    id: number;
    image: string;
    alt: string;
    content: string;
};

export const guidingPrinciples: guidingPrincipleProps[] = [
    {
        id: 1,
        image: `${guidingPrincipleImagePath}/guiding-principle-1.jpg`,
        alt: "",
        label: "Human First Approach"
    },
    {
        id: 2,
        image: `${guidingPrincipleImagePath}/guiding-principle-2.jpg`,
        alt: "",
        label: "Collaboration"
    },
    {
        id: 3,
        image: `${guidingPrincipleImagePath}/guiding-principle-3.jpg`,
        alt: "",
        label: "Holistic Thinking"
    },
    {
        id: 4,
        image: `${guidingPrincipleImagePath}/guiding-principle-4.jpg`,
        alt: "",
        label: "Play, Ritual, Story"
    },
    {
        id: 5,
        image: `${guidingPrincipleImagePath}/guiding-principle-5.jpg`,
        alt: "",
        label: "Servant Leadership"
    }
];

export const ourCommunity: ourCommunityProps[] = [
    {
        id: 1, 
        image: `${ourCommunityImagePath}/action-area-card-1.jpg`,
        alt: "",
        content: "Over 250 contributors at The Verse"
    },
    {
        id: 2,
        image: `${ourCommunityImagePath}/action-area-card-2.jpg`,
        alt: "",
        content: "Over 47,000 hours on Verse Projects"
    },
    {
        id: 3,
        image: `${ourCommunityImagePath}/action-area-card-3.jpg`,
        alt: "",
        content: "During summers, we have 50+ working on average 25 hours a week"
    },
    {
        id: 4,
        image: `${ourCommunityImagePath}/action-area-card-4.jpg`,
        alt: "",
        content: "You know who you are! Multi-talented, creative, and inspired to change the world"
    },
    {
        id: 5,
        image: `${ourCommunityImagePath}/action-area-card-5.jpg`,
        alt: "",
        content: "Versers feel empowered, enriched, connected, and productive"
    }
];