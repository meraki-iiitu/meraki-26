/**
 * @fileoverview Consolidated event data - Single source of truth.
 * 
 * All event information used across:
 * - Elite Events section (homepage)
 * - Event Details pages
 * - Schedule page
 * 
 * @module constants/eventsData
 */

import skyCircuitImg from "../assets/sky_circuit.webp";
import skyCircuitImgLarge from "../assets/sky_circuit.webp";
import roboDriveImg from "../assets/robo_drive.webp";
import roboDriveImgLarge from "../assets/robo_drive.webp";
import hackTheThroneImg from "../assets/hack_the_throne.webp";
import hackTheThroneImgLarge from "../assets/hack_the_throne.webp";
import arenaXImg from "../assets/arena_x.webp";
import cairLogo from "../assets/sponsors/iitlogo.webp";
import aerostarLogo from "../assets/sponsors/aerostar.webp";
import agastyaLogo from "../assets/agastya.jpg";
import teamShaktiLogo from "../assets/team_shakti.webp";
import hackathoneBrochure from "../assets/brochures/hackathone.pdf";
import roboDriveBrochure from "../assets/brochures/robo-drive.pdf";

// Event Icons
import bugBashIcon from "../assets/eventImages/icons/bug-bash-sq.jpeg";
import kaggleClashIcon from "../assets/eventImages/icons/kaggle-clash-sq.jpeg";
import mysteryOpsIcon from "../assets/eventImages/icons/mystery-ops-sq.jpeg";
import roboDriveIcon from "../assets/eventImages/icons/robo-drive-sq.jpeg";
import roboSoccerIcon from "../assets/eventImages/icons/robo-soccer-sq.jpeg";
import roboTraceIcon from "../assets/eventImages/icons/robo-trace-sq.jpeg";
import ucpcIcon from "../assets/eventImages/icons/ucpc-sq.jpeg";

// Expert Talks Images
import amitShuklaImg from "../assets/experts/amit.jpg";
import nidhishBhatnagarImg from "../assets/experts/nidhish.jpg";
import sonikaTanwarImg from "../assets/experts/sonika.jpg";
import rishavMishraImg from "../assets/experts/rishav-mishra.jpg";

/**
 * Master events data object keyed by event key.
 * 
 * @constant
 * @type {Object<string, Object>}
 */
export const eventsData = {
    // =====================
    // MERAKI DAY 1 - 7th February 2026
    // =====================
    'inauguration': {
        id: 1,
        title: 'MERAKI INAUGURATION / OPENING CEREMONY',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'Grand opening ceremony of Meraki 2026.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: '',
        image2: '',
        eventDate: '7th February 2026',
        time: '9:30 AM - 1:00 PM',
        venue: 'OAT',
        tags: ['Ceremony', 'Opening'],
        category: ['Day 1']
    },
    'innovation-expo': {
        id: 2,
        title: 'INNOVATION EXPO',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'Exhibition showcasing innovative projects and ideas.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: '',
        image2: '',
        eventDate: '7th February 2026',
        time: '11:30 AM - 03:00 PM',
        venue: 'IIIT Una Campus',
        tags: ['Innovation', 'Exhibition'],
        category: ['Day 1']
    },
    'hack-the-throne': {
        id: 3,
        title: 'HACK-THE-THRONE',
        isElite: true,
        isSpeakerSession: false,
        isLive: true,
        description: 'Hack-The-Throne is a national-level inter-college hackathon where students take ideas from problem identification to rapid prototyping, simulating real-world industry and startup environments. Participants build innovative solutions across the following domains:\n\nSustainability & Green Technology\n\nFinTech & Digital Innovation\n\nHealth Technology\n\nSmart Automation\n\nDigital Security Systems',
        registrationLink: 'https://hack-the-throne.devfolio.co/overview',
        brochure: hackathoneBrochure,
        price: '₹48000/-',
        image1: hackTheThroneImg,
        image2: hackTheThroneImgLarge,
        eventDate: '7th-8th February 2026',
        time: 'Opening: 12:00 PM - 1:00 PM (Day 1), Judgement: 12:00 PM - 5:00 PM (Day 2)',
        venue: 'Room No. 102, 103, 104, 227',
        tags: ['Coding', 'Hackathon', 'Innovation', 'Tech', 'National Level'],
        category: ['Day 1', 'Day 2']
    },
    'skycircuit': {
        id: 4,
        title: 'SKYCIRCUIT',
        isElite: true,
        isSpeakerSession: false,
        isLive: true,
        description: 'The Drone Showcase & Innovation Expo is a high-impact technical exhibition designed to bring together institute drone teams, research groups, and drone technology startups on a single platform. The event aims to highlight the rapid advancements in UAV technology, foster knowledge exchange.',
        registrationLink: 'mailto:meraki@iiitu.ac.in?subject=Sky Circuit Registration&body=Hello, I would like to showcase something cool at Sky Circuit event',
        brochure: '',
        price: '',
        image1: skyCircuitImg,
        image2: skyCircuitImgLarge,
        eventDate: '7th February 2026',
        time: '1:30 PM - 3:30 PM',
        venue: 'Football Ground',
        tags: ['Aeromodelling', 'Drones', 'Aircrafts', 'FPVs'],
        category: ['Day 1'],
        sponsors: [
            { name: "CAIR", institution: "IIT Mandi", logo: cairLogo, type: "Title Sponsor" },
            { name: "AEROSTAR", logo: aerostarLogo, type: "Co-Sponsor" },
            { name: "Agastya Club", institution: "NIT Jalandhar", logo: agastyaLogo, type: "Event Patron" },
            { name: "Team Shakti", institution: "Chitkara University", logo: teamShaktiLogo, type: "Event Patron" }
        ]
    },
    'defense-talk': {
        id: 5,
        title: 'DEFENSE TALK - Wg Cmdr Sonika Tanwar',
        isElite: false,
        isSpeakerSession: true,
        isLive: true,
        description: 'Inspiring defense talk by Wing Commander Sonika Tanwar.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: sonikaTanwarImg,
        image2: sonikaTanwarImg,
        eventDate: '7th February 2026',
        time: '3:30 PM - 5:00 PM',
        venue: 'OAT',
        tags: ['Talk', 'Defense', 'Inspiration'],
        category: ['Day 1']
    },
    'technical-talk-amit-shukla': {
        id: 6,
        title: 'TECHNICAL TALK - Dr. Amit Shukla',
        isElite: false,
        isSpeakerSession: true,
        isLive: true,
        description: 'Technical talk by Dr. Amit Shukla.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: amitShuklaImg,
        image2: amitShuklaImg,
        eventDate: '7th February 2026',
        time: '6:00 PM - 7:00 PM',
        venue: 'Room No. 227',
        tags: ['Talk', 'Technical'],
        category: ['Day 1']
    },
    'robo-soccer': {
        id: 7,
        title: 'ROBO-SOCCER',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'A robotics-based head-to-head arena where teams design, build, and operate an Arduino and Bluetooth-controlled RC robot within a compact field. Two teams enter the arena simultaneously with the objective of pushing a lightweight ball into the opponent’s goal. The challenge emphasizes real-time decision-making and precision under pressure, encouraging innovation, coordination, and competitive problem-solving in a dynamic environment.',
        registrationLink: 'https://unstop.com/competitions/robo-soccer-meraki-2026-indian-institute-of-information-technology-iiit-una-1627487',
        brochure: '',
        price: '',
        icon: roboSoccerIcon,
        image1: '',
        image2: '',
        eventDate: '7th February 2026',
        time: '7:30 PM - 9:00 PM',
        venue: 'BasketBall Court',
        tags: ['Robotics', 'Competition', 'Soccer'],
        category: ['Day 1']
    },
    'arenax': {
        id: 8,
        title: 'ARENAX SPORTS CARNIVAL',
        isElite: true,
        isSpeakerSession: false,
        isLive: true,
        description: 'Arena X Esports is a competitive esports tournament designed to test teamwork, strategy, and in-game skills across popular multiplayer titles. The event brings together skilled players to compete in structured qualifiers and matches under fair play and competitive conditions.',
        registrationLink: 'BGMI: https://unstop.com/p/arenax-esports-carnival-bgmi-meraki-2026-indian-institute-of-information-technology-iiit-una-1627499 | Valorant: https://unstop.com/p/arenax-esports-carnival-valorant-meraki-2026-indian-institute-of-information-technology-iiit-una-1627521 | Clash Royale: https://unstop.com/p/arenax-esports-carnival-clash-royale-meraki-2026-indian-institute-of-information-technology-iiit-una-1627520',
        brochure: '',
        price: '₹12000/-',
        image1: arenaXImg,
        image2: arenaXImg,
        eventDate: '7th-8th February 2026',
        time: 'Day 1: 9:30 PM - 11:00 PM, Day 2: 9:00 PM - 11:00 PM',
        venue: 'Room No. 204',
        tags: ['Esports', 'Gaming', 'BGMI', 'Valorant'],
        category: ['Day 1', 'Day 2']
    },

    // =====================
    // MERAKI DAY 2 - 8th February 2026
    // =====================
    'bug-bash': {
        id: 9,
        title: 'BUG-BASH',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'Bug Bash is a hands-on technical event based on the Arduino Uno platform, designed to test participants’ debugging, logical reasoning, and circuit-building skills. Teams will work collaboratively to analyze a given problem statement, identify faults in provided Arduino code, and correct both software and hardware errors to achieve the desired output within a limited time.The event emphasizes real-world embedded system troubleshooting and practical problem-solving under pressure.',
        registrationLink: 'https://unstop.com/competitions/bug-bash-meraki-2026-indian-institute-of-information-technology-iiit-una-1627497',
        brochure: '',
        price: '',
        icon: bugBashIcon,
        image1: '',
        image2: '',
        eventDate: '8th February 2026',
        time: '9:00 AM - 10:30 AM',
        venue: 'Room No. 222',
        tags: ['Coding', 'Debugging', 'Competition'],
        category: ['Day 2']
    },
    'talk-nidhish-bhatnagar': {
        id: 10,
        title: 'TALK - Col. Nidhish Bhatnagar',
        isElite: false,
        isSpeakerSession: true,
        isLive: true,
        description: 'Talk by Colonel Nidhish Bhatnagar.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: nidhishBhatnagarImg,
        image2: nidhishBhatnagarImg,
        eventDate: '8th February 2026',
        time: '10:30 AM - 12:00 PM',
        venue: 'OAT',
        tags: ['Talk', 'Defense', 'Inspiration'],
        category: ['Day 2']
    },
    'pixelforge': {
        id: 11,
        title: 'PIXELFORGE',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'PicxelForge is a multi-round, hands-on front-end web development event designed to test participants\' understanding of UI design, layout logic, and implementation skills. Participants will first analyze real-world UI components to understand how they are built, followed by a team-based challenge where they recreate a given UI design using HTML, CSS, and JavaScript. Accuracy, responsiveness, and clean implementation will determine the final winners.',
        registrationLink: 'https://unstop.com/p/pixelforge-indian-institute-of-information-technology-iiit-una-1628146',
        brochure: '',
        price: '',
        image1: '',
        image2: '',
        eventDate: '8th February 2026',
        time: '11:30 AM - 1:30 PM',
        venue: 'Room No. 006',
        tags: ['Design', 'Art', 'Creative'],
        category: ['Day 2']
    },
    'alumni-session': {
        id: 12,
        title: 'ALUMNI SESSION - Rishav Sir',
        isElite: false,
        isSpeakerSession: true,
        isLive: true,
        description: 'Alumni session and experience sharing.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: rishavMishraImg,
        image2: rishavMishraImg,
        eventDate: '8th February 2026',
        time: '2:00 PM - 3:00 PM',
        venue: 'IIIT Una Campus',
        tags: ['Talk', 'Alumni'],
        category: ['Day 2']
    },

    'robo-trace': {
        id: 14,
        title: 'ROBO-TRACE (LINE FOLLOWER ROBOT)',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'This event is a multi-round robotics challenge designed to test participants’ problem-solving ability, teamwork, and line-following robot performance. Teams will progress through a pre-event puzzle-based qualification round followed by high-speed knockout races on a structured track.',
        registrationLink: 'https://unstop.com/competitions/robo-trace-meraki-2026-indian-institute-of-information-technology-iiit-una-1627194',
        brochure: '',
        price: '',
        icon: roboTraceIcon,
        image1: '',
        image2: '',
        eventDate: '8th February 2026',
        time: '3:00 PM - 5:00 PM',
        venue: 'West Entrance, ACAD',
        tags: ['Robotics', 'Line Follower', 'Competition'],
        category: ['Day 2']
    },
    'kaggle-clash': {
        id: 15,
        title: 'KAGGLE CLASH',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'Kaggle Clash is a competitive machine learning event designed to evaluate participants on model accuracy, computational efficiency, and conceptual understanding. Teams work under a strict time constraint on three distinct datasets—structured data, image data, and natural language data—requiring them to make strategic decisions on model selection and optimization. Participants must carefully balance performance with efficient use of computational resources, while demonstrating strong problem-solving skills and practical machine learning judgment under pressure.',
        registrationLink: 'https://unstop.com/competitions/kaggle-clash-meraki-2026-indian-institute-of-information-technology-iiit-una-1628150',
        brochure: '',
        price: '',
        icon: kaggleClashIcon,
        image1: '',
        image2: '',
        eventDate: '8th February 2026',
        time: '5:00 PM - 7:30 PM',
        venue: 'Room No. 006',
        tags: ['Data Science', 'ML', 'Competition'],
        category: ['Day 2']
    },
    'hackermaze': {
        id: 16,
        title: 'HACKERMAZE',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'HackerMaze is a Minecraft-themed, escape-room style technical event designed to test participants\' logical reasoning, aptitude, and coding skills under time constraints. Teams must solve puzzles, decode clues, and complete programming challenges to progress through different stages. The event emphasizes problem-solving ability, analytical thinking, and teamwork in an immersive and competitive environment.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: '',
        image2: '',
        eventDate: '8th February 2026',
        time: '5:30 PM - 7:30 PM',
        venue: 'Room No. 225, 226, 227, 230, 231',
        tags: ['Hacking', 'Puzzle', 'Competition'],
        category: ['Day 2']
    },


    // =====================
    // MERAKI DAY 3 - 9th February 2026
    // =====================
    'coding-casino': {
        id: 18,
        title: 'CODING CASINO',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'Coding Casino is an exciting, high-pressure coding event that blends DSA skills with an element of luck. Participants gamble virtual coins by spinning a DSA topic wheel and solving randomly assigned GFG problems. The event tests problem-solving ability, speed, and strategic decision-making in a fun and competitive casino-style environment.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '9:30 AM - 11:30 AM',
        venue: 'Room No. 104',
        tags: ['Coding', 'Fun', 'Competition'],
        category: ['Day 3']
    },
    'mystery-ops': {
        id: 19,
        title: 'MYSTERY OPS',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'This event is a multi-round, escape-room style challenge designed to test participants\' logical thinking, observation skills, and teamwork. Participants will progress through an individual puzzle-based elimination round followed by a team-based challenge across multiple themed rooms. Strategy, coordination, and time management will determine the ultimate winner.',
        registrationLink: 'https://unstop.com/competitions/mystery-ops-meraki-2026-indian-institute-of-information-technology-iiit-una-1627508',
        brochure: '',
        price: '',
        icon: mysteryOpsIcon,
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '11:30 AM - 1:00 PM',
        venue: 'IIIT Una Campus',
        tags: ['Mystery', 'Competition'],
        category: ['Day 3']
    },
    'bot-or-brain': {
        id: 20,
        title: 'BOT OR BRAIN (For Faculty)',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'AI vs Human faculty challenge.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '2:00 PM - 5:00 PM',
        venue: 'OAT',
        tags: ['AI', 'Faculty', 'Fun'],
        category: ['Day 3']
    },
    'scalesquest': {
        id: 21,
        title: 'SCALESQUEST (For Faculty)',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'Faculty engagement competition.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '2:00 PM - 5:00 PM',
        venue: 'OAT',
        tags: ['Faculty', 'Competition'],
        category: ['Day 3']
    },
    'ucpc': {
        id: 22,
        title: 'UCPC',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'UCPC is a fun and competitive coding event inspired by the ICPC format, designed to improve participants\' problem-solving and programming skills.',
        registrationLink: 'https://unstop.com/hackathons/ucpc-meraki-2026-indian-institute-of-information-technology-iiit-una-1628130',
        brochure: '',
        price: '',
        icon: ucpcIcon,
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '2:00 PM - 5:00 PM',
        venue: 'Room No. 006',
        tags: ['Coding', 'Competitive Programming'],
        category: ['Day 3']
    },
    'framorama': {
        id: 23,
        title: 'FRAMORAMA',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'Photography and framing competition.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '5:00 PM',
        venue: 'PIXCEL',
        tags: ['Photography', 'Creative'],
        category: ['Day 3']
    },
    'robodrive': {
        id: 24,
        title: 'ROBODRIVE',
        isElite: true,
        isSpeakerSession: false,
        isLive: true,
        description: 'Robo Drive is a time-based robotics competition where participants design and manually control a robot car to complete a predefined track in the shortest possible time. The event emphasizes precision driving, speed control, and accurate obstacle navigation, with time penalties for errors such as touching track boundaries, missing checkpoints or collisions testing participants’ skills in robot design, motor control, Arduino fundamentals, and real-time decision-making.',
        registrationLink: 'https://unstop.com/p/robodrive-meraki-2026-indian-institute-of-information-technology-iiit-una-1617278',
        brochure: roboDriveBrochure,
        price: '₹20000/-',
        icon: roboDriveIcon,
        image1: roboDriveImg,
        image2: roboDriveImgLarge,
        eventDate: '9th February 2026',
        time: '5:00 PM - 8:30 PM',
        venue: 'Assembly Point, Admin Block',
        tags: ['Robotics', 'Engineering', 'Competition', 'Innovation'],
        category: ['Day 3']
    },
    'musical-night-closing': {
        id: 25,
        title: 'MUSICAL NIGHT & CLOSING CEREMONY',
        isElite: false,
        isSpeakerSession: false,
        isLive: true,
        description: 'Grand closing ceremony with musical performances by SARGAM.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '9:00 PM - 11:00 PM',
        venue: 'OAT',
        tags: ['Music', 'Ceremony', 'Closing'],
        category: ['Day 3']
    }
};

/**
 * Get event by key.
 * @param {string} key - Event key
 * @returns {Object|null} Event data or null
 */
export const getEventByKey = (key) => eventsData[key] || null;

/**
 * Get event by ID.
 * @param {number} id - Event ID
 * @returns {Object|null} Event data or null
 */
export const getEventById = (id) => Object.values(eventsData).find(e => e.id === id) || null;

/**
 * Get all events as array sorted by ID.
 * @returns {Array<Object>} Sorted events array
 */
export const getAllEvents = () => Object.values(eventsData).sort((a, b) => a.id - b.id);

/**
 * Get elite events for homepage display.
 * @returns {Array<Object>} Elite events array
 */
export const getEliteEvents = () => getAllEvents().filter(e => e.isElite);

/**
 * Get events by category (supports array categories).
 * @param {string} day - Day filter (e.g., 'Day 1', 'Day 2', 'Day 3')
 * @returns {Array<Object>} Events in category
 */
export const getEventsByCategory = (day) => getAllEvents().filter(e => e.category && e.category.includes(day));

/**
 * Get Day 1 events.
 * @returns {Array<Object>} Day 1 events
 */
export const getDay1Events = () => getEventsByCategory('Day 1');

/**
 * Get Day 2 events.
 * @returns {Array<Object>} Day 2 events
 */
export const getDay2Events = () => getEventsByCategory('Day 2');

/**
 * Get Day 3 events.
 * @returns {Array<Object>} Day 3 events
 */
export const getDay3Events = () => getEventsByCategory('Day 3');

/**
 * Get speaker session events.
 * @returns {Array<Object>} Speaker session events
 */
export const getSpeakerSessions = () => getAllEvents().filter(e => e.isSpeakerSession);

/**
 * Get live events.
 * @returns {Array<Object>} Live events
 */
export const getLiveEvents = () => getAllEvents().filter(e => e.isLive);

/**
 * Get short description (first sentence) for an event.
 * @param {string} key - Event key
 * @returns {string} Short description
 */
export const getShortDescription = (key) => {
    const event = eventsData[key];
    return event ? event.description.split('.')[0] + '.' : '';
};
