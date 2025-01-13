interface termsOfServiceProps {
    id: number;
    title: string;
    content: {
        intro?: string;
        points?: string[];
    };
};

export const termsOfService: termsOfServiceProps[] = [
    {
        id: 1,
        title: "Acceptance of Terms",
        content: {
            intro: "By using this website, you agree to these Terms. If you do not agree, please refrain from using the site."
        }
    },
    {
        id: 2,
        title: "Use of the Website",
        content: {
            intro: "You agree to:",
            points: [
                "Use the site for lawful purposes only.",
                "Not engage in unauthorized or malicious activities (e.g., hacking, distributing malware, scraping content)."
            ]
        }
    },
    {
        id: 3,
        title: "Intellectual Property",
        content: {
            points: [
                "All content on this website—including text, graphics, images, logos, and digital experiences—is the property of The Verse unless otherwise stated.",
                "You may not reproduce, distribute, or modify any content without explicit permission."
            ]
        }
    },
    {
        id: 4,
        title: "User Submissions",
        content: {
            points: [
                "If you submit ideas, artwork, or other content to us, you grant The Verse a non-exclusive, royalty-free license to use, modify, or share the content as part of our initiatives.",
                "You are responsible for ensuring that your submissions do not violate any third-party rights."
            ]
        }
    },
    {
        id: 5,
        title: "Third-Party Content",
        content: {
            intro: "We may feature links, tools, or content from third parties. We are not responsible for their accuracy, availability, or security."
        }
    },
    {
        id: 6,
        title: "Disclaimer of Warranties",
        content: {
            intro: "The website is provided “as is” without warranties of any kind. We do not guarantee uninterrupted access, error-free content, or that the website is free from harmful components."
        }
    },
    {
        id: 7,
        title: "Limitation of Liability",
        content: {
            intro: "To the maximum extent allowed by law, The Verse will not be liable for any damages (direct, indirect, incidental) resulting from your use of this site."
        }
    },
    {
        id: 8,
        title: "Termination",
        content: {
            intro: "We reserve the right to suspend or terminate access to the site at any time for violation of these Terms."
        }
    },
    {
        id: 9,
        title: "Changes to Terms",
        content: {
            intro: "We may update these Terms periodically. Continued use of the website signifies acceptance of any updates."
        }
    },
    {
        id: 10,
        title: "Governing Law",
        content: {
            intro: "These Terms are governed by the laws of California, USA. Any disputes will be resolved in the jurisdiction of California, USA."
        }
    }
];