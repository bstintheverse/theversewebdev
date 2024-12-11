export interface teamMemberProps {
    id: number;
    image: string;
    alt: string;
    name: string;
    role: string;
    location: string;
    description?: string;
};

const imagePath = "/assets/images/team-members/team-member-"

export const teamMembers: teamMemberProps[] = [
    {
        id: 1,
        image: `${imagePath}1.png`,
        alt: "Photo of Ben Simon-Thomas",
        name: "Ben Simon-Thomas",
        role: "Co-Founder and Executive Director",
        location: "California, USA",
        description: "Ben designs games, experiences, and rituals that inspire and uplift humanity. As a member of Catalyst 2030 and coordinator of the IDG Berkeley Uplift Lab, he focuses on creating positive change through collaboration. A world builder, team builder, and connector, he strives to foster meaningful connections and drive impactful innovation."
    }, 
    {
        id: 2,
        image: `${imagePath}2.jpeg`,
        alt: "Photo of Anshul Pendse",
        name: "Anshul Pendse",
        role: "Co-Founder, Creative and Technical Director",
        location: "California, USA",
        description: "Anshul is a media artist, game designer, and world builder with a Master of Fine Arts in Interactive Media & Game Design from USC. Currently a PhD candidate in Media Arts & Technology at UC Santa Barbara, he is passionate about merging entertainment, wellness, and spirituality through innovative media."
    },
    {
        id: 3,
        image: `${imagePath}3.png`,
        alt: "Photo of Sam Wright-Edwards",
        name: "Sam Wright-Edwards",
        role: "Director, Operations",
        location: "Ontario, Canada"
    },
    {
        id: 4,
        image: `${imagePath}4.png`,
        alt: "Photo of Alistair Song-White",
        name: "Alistair Song-White",
        role: "Video Game Designer, UI/UX Designer",
        location: "California, USA"
    },
    {
        id: 5,
        image: `${imagePath}5.png`,
        alt: "Photo of Vaishali Ramesh",
        name: "Vaishali Ramesh",
        role: "Science and Well-Being Researcher",
        location: "India"
    },
    {
        id: 6,
        image: `${imagePath}6.png`,
        alt: "Photo of Quenton Porter",
        name: "Quenton Porter",
        role: "Product Manager",
        location: "West Virginia, USA"
    },
    {
        id: 7,
        image: `${imagePath}7.png`,
        alt: "Photo of Daniel Tsai",
        name: "Daniel Tsai",
        role: "Game Developer",
        location: "California, USA"
    },
    {
        id: 8,
        image: `${imagePath}8.png`,
        alt: "Photo of Jay Jayachandran",
        name: "Jay Jayachandran",
        role: "Product Designer, Product Manager",
        location: "Nevada, USA"
    },
    {
        id: 9,
        image: `${imagePath}9.png`,
        alt: "Photo of Gargi Pawar",
        name: "Gargi Pawar",
        role: "Compensation Analyst",
        location: "Florida, USA"
    },
    {
        id: 10,
        image: `${imagePath}10.png`,
        alt: "Photo of Kyle Eason",
        name: "Kyle Eason",
        role: "Storytelling Consultant",
        location: "Colarado, USA"
    },
    {
        id: 11,
        image: `${imagePath}11.jpeg`,
        alt: "Photo of Lily Le",
        name: "Lily Le",
        role: "Web Developer",
        location: "Ontario, Canada"
    },
    {
        id: 12,
        image: `${imagePath}12.jpeg`,
        alt: "Photo of Philip Sadler",
        name: "Philip Sadler",
        role: "Fellow, Yoga and Breathwork Teacher",
        location: "California, USA"
    },
    {
        id: 13,
        image: `${imagePath}13.png`,
        alt: "Photo of Sonni",
        name: "Sonni",
        role: "Wellness Designer and Researcher",
        location: "California, USA"
    }
]