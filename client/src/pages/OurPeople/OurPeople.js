import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// styling
import "./OurPeople.scss";
// components
import { TeamMemberFounderCard } from "../../components/Cards/TeamMemberCard/TeamMemberCard";
import { TeamMemberCard } from "../../components/Cards/TeamMemberCard/TeamMemberCard";
// library
import { Helmet, HelmetProvider } from "react-helmet-async";
// data
import { teamMembers } from "../../data/teamMembers";
export default function OurPeoplePage() {
    return (_jsxs(HelmetProvider, { children: [_jsx(Helmet, { children: _jsx("title", { children: "The Verse | Our People" }) }), _jsxs("section", { className: "our-people", children: [_jsx("div", { className: "full-width-bg-wrapper full-width-bg-wrapper--black", children: _jsxs("div", { className: "our-people__container", children: [_jsx("h2", { className: "our-people__subheader", children: "Meet The Team" }), _jsx("p", { className: "our-people__text", children: "The Verse is a global community of inspired gamers, developers, designers, scientists, artists, visionaries, teachers, and students who join together to passionately contribute their wide-ranging expertise to invent experiences that enhance human flourishing. We are committed to \u201Cengaging in work that creates greater happiness, wisdom, and well-being, and relieves suffering in ourselves and others.\u201D We think of The Verse as a practice." })] }) }), _jsx("section", { className: "our-people__team", children: _jsx("ul", { className: "our-people__card-list", children: teamMembers.map((teamMember) => (teamMember.id === 1 || teamMember.id === 2 ? (_jsx(TeamMemberFounderCard, { id: teamMember.id, image: teamMember.image, alt: teamMember.alt, name: teamMember.name, role: teamMember.role, location: teamMember.location, description: teamMember.description }, teamMember.id)) : (_jsx(TeamMemberCard, { id: teamMember.id, name: teamMember.name, image: teamMember.image, alt: teamMember.alt, role: teamMember.role, location: teamMember.location }, teamMember.id)))) }) })] })] }));
}
;
