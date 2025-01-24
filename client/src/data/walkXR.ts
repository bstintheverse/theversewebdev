interface Header {
    id: number;
    title: string;
    subheaders?: Subheader[];
    content?: string[];
    items?: ListItem[];
    assets?: Asset[];
};

interface Subheader {
    id: number;
    title: string;
    content: string;
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

interface WalkInfoProp {
    headers: Header[];
}

export const walkInfo: WalkInfoProp = {
    headers: [
        {
            id: 1,
            title: "Extending Your Reality",
            subheaders: [
                {
                    id: 1,
                    title: "The What of WalkXR",
                    content: "WalkXR is an immersive, interactive platform that combines gamification, multimedia storytelling, emotional regulation practices, and ritualized engagement. It provides personalized, measurable journeys designed to foster empathy, self-awareness, and social action, allowing participants to learn, grow, and heal through deeply embodied experiences."
                },
                {
                    id: 2,
                    title: "The Why of WalkXR",
                    content: "WalkXR addresses the urgent need for tools that help individuals connect with pressing societal issues like gun violence, climate change, and gender inequality. By promoting empathy, emotional resilience, and a deeper understanding of these challenges, WalkXR empowers participants to reflect on their own roles and take meaningful action towards positive change."
                },
                {
                    id: 3,
                    title: "The How of WalkXR",
                    content: "WalkXR uses curated multimedia experiences, clinically-designed emotional regulation techniques (such as mindfulness and breathwork), and ritual-based activities that foster engagement. Through sentiment tracking and personalized feedback, WalkXR continuously adapts to each user’s journey, creating a space for personal transformation and measurable impact."
                }
            ]
        },
        {
            id: 2,
            title: "Walking the Walk",
            content: [
                "WalkXR embraces the transformative power of play to redefine how participants learn, create, connect, and heal through immersive experiences. By incorporating games as a foundational pillar of interaction, WalkXR offers participants a unique, embodied approach to explore critical issues and personal growth.",
                "By redefining how we use games and play, WalkXR provides a participatory, transformative environment for learning, growth, and connection."
            ],
            items: [
                {
                    id: 1,
                    content: "Learn: Through interactive role-playing scenarios and narrative-driven experiences, participants engage in immersive storytelling that fosters deep emotional connections and understanding of societal challenges like climate change, gun violence, and DEI."
                },
                {
                    id: 2,
                    content: `Create: WalkXR enables participants to contribute through art-based rituals, journaling,  and customizable "walks," empowering them to shape their own journey and create lasting artifacts of their experiences.`
                },
                {
                    id: 3,
                    content: "Rituals are WalkXR’s User-Generated-Content pipeline."
                },
                {
                    id: 4,
                    content: "Connect: The platform fosters community by encouraging the sharing of personal stories, collective reflection, and shared experience, strengthening empathy and connection within communities."
                },
                {
                    id: 5,
                    content: "Heal: WalkXR integrates emotional regulation practices within its gamified framework to help participants process difficult emotions, promoting resilience, self-awareness, and healing."
                }
            ],
            assets: [
                {
                    id: 1,
                    type: "video",
                    src: "/"
                }
            ]
        },
        {
            id: 3,
            title: "Step Into Action with PolyWalks",
            subheaders: [
                {
                    id: 1,
                    title: `"Climate Change" Comic By The Verse`,
                    content: "WalkXR Climate Change is an immersive, interactive journey that empowers players to engage with the global climate crisis on a personal level. Through storytelling, emotional practices, and creative rituals, participants explore the challenges of climate change, build empathy for those affected, and discover actionable steps to drive meaningful change in their communities and beyond."
                }
            ],
            content: [
                "After discussions with partners and funders, we chose to focus on the pressing crises impacting humanity today. We call these experiences PolyWalks.",
                "As we continue, we see these crises unfolding everywhere, deepening the urgency for collective action. In response, we are developing WalkXR as an educational tool to address pressing societal issues such as gun violence prevention, gender equality, DEI, and climate change."
            ],
            items: [
                {
                    id: 1,
                    content: "PolyWalk: Climate"
                },
                {
                    id: 2,
                    content: "PolyWalk: Gender Inequality"
                },
                {
                    id: 3,
                    content: "Polywalk: Gun Violence"
                },
                {
                    id: 4,
                    content: "PolyWalk: DEI"
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
};