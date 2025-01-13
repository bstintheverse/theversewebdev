interface privacyPolicyProps {
    id: number;
    title: string;
    lastUpdated?: string;
    content?: {
        description?: string;
        points?: string[];
    }
};

export const privacyPolicies: privacyPolicyProps[] = [
    {
        id: 1,
        title: "Information We Collect",
        content: {
            description: "We may collect the following types of information:",
            points: [
                `Personal Information: Name, email address, and contact details (only if you provide them, e.g., when signing up for newsletters or submitting a form)`,
                `Usage Data: Information about how you interact with the website (e.g., pages visited, time spent, browser type).`,
                `Cookies and Tracking Technologies: Cookies and Tracking Technologies: We use cookies to enhance your browsing experience and analyze website traffic.`
            ]
        }
    },
    {
        id: 2,
        title: "How We Use Your Information",
        content: {
            description: "We use your information to:",
            points: [
                "Improve our website and user experience.",
                "Send newsletters, updates, or respond to inquiries if you opt-in.",
                "Analyze website performance through aggregated, non-identifiable data."
            ]
        }
    },
    {
        id: 3,
        title: "Sharing Your Information",
        content: {
            description: "We do not sell, rent, or share your personal information with third parties, except:",
            points: [
                "With trusted service providers who help us operate the website (e.g., analytics tools).",
                "If required by law or to protect our legal rights."
            ]
        }
    },
    {
        id: 4,
        title: "Cookies",
        content: {
            description: "Cookies allow us to track website activity and improve functionality. You can control or disable cookies through your browser settings."
        }
    },
    {
        id: 5,
        title: "Data Security",
        content: {
            description: "We implement reasonable security measures to protect your personal information. However, no online platform is 100% secure, so please share information responsibly."
        }
    },
    {
        id: 6,
        title: "Third-Party Links",
        content: {
            description: "Our website may contain links to external sites. We are not responsible for the privacy practices of third-party websites."
        }
    },
    {
        id: 7,
        title: "Your Rights",
        content: {
            description: "You can:",
            points: [
                "Request access to your personal information.",
                "Ask us to delete or correct your data.",
                "Opt out of receiving communications at any time."
            ]
        }
    },
    {
        id: 8,
        title: "Updates to This Policy",
        content: {
            description: "We may update this Privacy Policy periodically. Changes will be posted on this page."
        }
    }
];