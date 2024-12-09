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
        location: "Berkeley, CA",
        description: "Creating games, experiences, and rituals that uplift humanity. || Member Catalyst 2030 & Coordinator IDG Berkeley Uplift Lab. || World Builder - Team Builder - Connector/Collaborator - Human"
    }, 
    {
        id: 2,
        image: `/assets/images/placeholder-square.jpg`,
        alt: "Photo of Anshul Pendse",
        name: "Anshul Pendse",
        role: "Co-Founder",
        location: "Location"
    },
    {
        id: 3,
        image: `${imagePath}3.png`,
        alt: "Photo of Alistair Song-White",
        name: "Alistair Song-White",
        role: "Video Game Designer, UI/UX Designer",
        location: "Oakland, CA"
    },
    {
        id: 4,
        image: `${imagePath}4.png`,
        alt: "Photo of Vaishali Ramesh",
        name: "Vaishali Ramesh",
        role: "Science and Well-Being Researcher",
        location: "India"
    },
    {
        id: 5,
        image: `${imagePath}5.png`,
        alt: "Photo of Quenton Porter",
        name: "Quenton Porter",
        role: "Product Manager",
        location: "Charles Town, WV"
    },
    {
        id: 6,
        image: `${imagePath}6.png`,
        alt: "Photo of Daniel Tsai",
        name: "Daniel Tsai",
        role: "Game Developer",
        location: "Los Angeles, CA"
    },
    {
        id: 7,
        image: `${imagePath}7.png`,
        alt: "Photo of Jay Jayachandran",
        name: "Jay Jayachandran",
        role: "Product Designer, Product Manager",
        location: "Reno, NV"
    },
    {
        id: 8,
        image: `${imagePath}8.png`,
        alt: "Photo of Gargi Pawar",
        name: "Gargi Pawar",
        role: "Compensation Analyst",
        location: "Tampa, FL"
    },
    {
        id: 9,
        image: `${imagePath}9.png`,
        alt: "Photo of Kyle Eason",
        name: "Kyle Eason",
        role: "Storytelling Consultant",
        location: "Denver, CO"
    },
    {
        id: 10,
        image: `${imagePath}10.jpeg`,
        alt: "Photo of Lily Le",
        name: "Lily Le",
        role: "Web Developer",
        location: "Canada"
    }
]