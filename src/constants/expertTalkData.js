/**
 * @fileoverview Expert Talk data for speaker cards section.
 * 
 * Contains speaker information for the homepage Expert Talk section.
 * Each speaker features a name, title, photo, and highlight points
 * that display on hover.
 * 
 * @module constants/expertTalkData
 */

import drAmitShuklaImg from "../assets/experts/amit.jpg";
import colNidhishImg from "../assets/experts/nidhish.jpg";
import wcSonikaImg from "../assets/experts/sonika.jpg";

/**
 * Expert talks array for speaker cards.
 * 
 * @constant
 * @type {Array<Object>}
 * 
 * @property {number} id - Unique speaker identifier
 * @property {string} name - Speaker's full name
 * @property {string} title - Position or short description
 * @property {string} image - Speaker photo path
 * @property {string[]} highlights - Bullet points shown on hover
 */
export const expertTalks = [
    {
        id: 1,
        name: "Colonel Nidhish Bhatnagar",
        title: "Indian Army",
        image: colNidhishImg,
        highlights: [
            "30+ Years in Emerging Tech & Cybersecurity",
            "AI-Powered Big Data Analytics",
            "Space, Defense & Homeland Security",
            "Startup Mentor & Strategic Advisor"
        ]
    },
    {
        id: 2,
        name: "Wing Commander Sonika Tanwar",
        title: "Founder and CEO, DigiTruce.ai",
        image: wcSonikaImg,
        highlights: [
            "14 Years in IAF Information Security",
            "InfoSec Entrepreneur & Consultant",
            "Ex-Amazon Manager",
            "Leadership Coach & Public Speaker"
        ]
    },
    {
        id: 3,
        name: "Dr. Amit Shukla",
        title: "Chairperson, CAIR, IIT Mandi",
        image: drAmitShuklaImg,
        highlights: [
            "Roboticist, AI Expert, Entrepreneur",
            "Robotics & Drone Technology",
            "AI & ML",
            "Cyber Security & Electric Vehicles",
        ]
    },
];

