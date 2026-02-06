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

import chichiImg from "../assets/chichi.jpg";

// Sponsor Logos
import devfolioLogo from "../assets/sponsors/devfolio_logo.webp";
import ethIndiaLogo from "../assets/sponsors/ethindia.svg";
import requestlyLogo from "../assets/sponsors/RQ-Logo.svg";

// Event Icons
import bugBashIcon from "../assets/eventImages/icons/bug-bash-sq.jpeg";
import kaggleClashIcon from "../assets/eventImages/icons/kaggle-clash-sq.jpeg";
import mysteryOpsIcon from "../assets/eventImages/icons/mystery-ops-sq.jpeg";
import roboDriveIcon from "../assets/eventImages/icons/robo-drive-sq.jpeg";
import roboSoccerIcon from "../assets/eventImages/icons/robo-soccer-sq.jpeg";
import roboTraceIcon from "../assets/eventImages/icons/robo-trace-sq.jpeg";
import ucpcIcon from "../assets/eventImages/icons/ucpc-sq.jpeg";
import inaugurationIcon from "../assets/eventImages/icons/inauguration-sq.jpeg";
import innovationExpoIcon from "../assets/eventImages/icons/innovation-expo-sq.jpeg";
import musicalNightIcon from "../assets/eventImages/icons/musical-night-sq.jpeg";
import pixelforgeIcon from "../assets/eventImages/icons/pixelforge-sq.jpeg";
import hackermazeIcon from "../assets/eventImages/icons/hackermaze-sq.jpeg";
import codingCasinoIcon from "../assets/eventImages/icons/coding-casino-sq.jpeg";
import framoramaIcon from "../assets/eventImages/icons/framorama-sq.jpeg";
import bgmiIcon from "../assets/eventImages/icons/bgmi-pixel.png";
import valorantIcon from "../assets/eventImages/icons/valorant-pixel.png";
import clashRoyaleIcon from "../assets/eventImages/icons/clash-royale-pixel.png";

// Expert Talks Images
import amitShuklaImg from "../assets/experts/amit.jpg";
import nidhishBhatnagarImg from "../assets/experts/nidhish.jpg";
import sonikaTanwarImg from "../assets/experts/sonika.jpg";
import rishavMishraImg from "../assets/experts/rishav-mishra.jpg";

/**
 * Flagship events specifically highlighted on the homepage.
 * These are moved into a separate object but merged into eventsData for truth consistency.
 * 
 * @constant
 * @type {Object<string, Object>}
 */
export const flagshipEvents = {
    'hack-the-throne': {
        id: 3,
        slug: 'hack-the-throne',
        title: 'HACK-THE-THRONE',
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
        category: ['Day 1', 'Day 2'],
        sponsors: [
            { name: "Devfolio", logo: devfolioLogo, type: "Platform Partner" },
            { name: "ETHIndia", logo: ethIndiaLogo, type: "Track Sponsor" },
            { name: "Requestly", logo: requestlyLogo, type: "Track Sponsor" }
        ]
    },
    'skycircuit': {
        id: 4,
        slug: 'skycircuit',
        title: 'SKYCIRCUIT',
        description: 'The Drone Showcase & Innovation Expo is a high-impact technical exhibition designed to bring together institute drone teams, research groups, and drone technology startups on a single platform. The event aims to highlight the rapid advancements in UAV technology, foster knowledge exchange.',
        registrationLink: 'mailto:meraki@iiitu.ac.in?subject=Sky Circuit Registration&body=Hello, I would like to showcase something cool at Sky Circuit event',
        brochure: '',
        price: '',
        image1: skyCircuitImg,
        image2: skyCircuitImgLarge,
        eventDate: '7th February 2026',
        time: '1:30 PM - 3:30 PM',
        venue: 'Cricket Ground',
        tags: ['Aeromodelling', 'Drones', 'Aircrafts', 'FPVs'],
        category: ['Day 1'],
        sponsors: [
            { name: "CAIR", institution: "IIT Mandi", logo: cairLogo, type: "Title Sponsor" },
            { name: "AEROSTAR", logo: aerostarLogo, type: "Co-Sponsor" },
            { name: "Agastya Club", institution: "NIT Jalandhar", logo: agastyaLogo, type: "Event Patron" },
            { name: "Team Shakti", institution: "Chitkara University", logo: teamShaktiLogo, type: "Event Patron" }
        ]
    },
    'arenax': {
        id: 8,
        slug: 'arenax',
        title: 'ARENAX SPORTS CARNIVAL',
        description: 'Arena X Esports is a competitive esports tournament designed to test teamwork, strategy, and in-game skills across popular multiplayer titles. The event brings together skilled players to compete in structured qualifiers and matches under fair play and competitive conditions.',
        registrationLink: null, // Multiple links handled via popup
        subEvents: [
            {
                name: 'BGMI',
                logo: bgmiIcon,
                registrationLink: 'https://unstop.com/p/arenax-esports-carnival-bgmi-meraki-2026-indian-institute-of-information-technology-iiit-una-1627499'
            },
            {
                name: 'Valorant',
                logo: valorantIcon,
                registrationLink: 'https://unstop.com/p/arenax-esports-carnival-valorant-meraki-2026-indian-institute-of-information-technology-iiit-una-1627521'
            },
            {
                name: 'Clash Royale',
                logo: clashRoyaleIcon,
                registrationLink: 'https://unstop.com/p/arenax-esports-carnival-clash-royale-meraki-2026-indian-institute-of-information-technology-iiit-una-1627520'
            }
        ],
        brochure: '',
        price: '₹12000/-',
        image1: arenaXImg,
        image2: arenaXImg,
        eventDate: '7th-8th February 2026',
        time: 'Day 1: 9:30 PM - 11:00 PM, Day 2: 9:00 PM - 11:00 PM, Day 3: 9:00 PM - 11:00 PM',
        venue: 'Room No. 006',
        tags: ['Esports', 'Gaming', 'BGMI', 'Valorant'],
        category: ['Day 1', 'Day 2', 'Day 3']
    },
    'robodrive': {
        id: 24,
        slug: 'robodrive',
        title: 'ROBODRIVE',
        description: 'Robo Drive is a time-based robotics competition where participants design and manually control a robot car to complete a predefined track in the shortest possible time. The event emphasizes precision driving, speed control, and accurate obstacle navigation, with time penalties for errors such as touching track boundaries, missing checkpoints or collisions testing participants’ skills in robot design, motor control, Arduino fundamentals, and real-time decision-making.',
        registrationLink: 'https://unstop.com/p/robodrive-meraki-2026-indian-institute-of-information-technology-iiit-una-1617278',
        brochure: roboDriveBrochure,
        price: '₹20000/-',
        icon: roboDriveIcon,
        image1: roboDriveImg,
        image2: roboDriveImgLarge,
        eventDate: '9th February 2026',
        time: '5:00 PM - 8:30 PM',
        venue: 'TBD',
        tags: ['Robotics', 'Engineering', 'Competition', 'Innovation'],
        category: ['Day 3']
    },
};

/**
 * Array version of elite events for section-based rendering.
 * @constant
 */
export const eliteEvents = Object.values(flagshipEvents);

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
        description: 'Grand opening ceremony of Meraki 2026.',
        registrationLink: '',
        brochure: '',
        price: '',
        icon: inaugurationIcon,
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
        description: 'Exhibition showcasing innovative projects and ideas.',
        registrationLink: '',
        brochure: '',
        price: '',
        icon: innovationExpoIcon,
        image1: '',
        image2: '',
        eventDate: '7th February 2026',
        time: '11:30 AM - 03:00 PM',
        venue: 'Academic Block',
        tags: ['Innovation', 'Exhibition'],
        category: ['Day 1']
    },

    // Flagship events merged here
    ...flagshipEvents,

    'defense-talk': {
        id: 5,
        title: 'DEFENSE TALK - Wg Cmdr Sonika Tanwar',
        description: 'Inspiring defense talk by Wing Commander Sonika Tanwar.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: sonikaTanwarImg,
        image2: sonikaTanwarImg,
        eventDate: '7th February 2026',
        time: '3:30 PM - 4:30 PM',
        venue: 'OAT',
        tags: ['Talk', 'Defense', 'Inspiration'],
        category: ['Day 1']
    },
    'techcadd-session': {
        id: 26,
        title: 'SESSION BY TECHCADD (The AI dog Chichi)',
        description: 'Interactive session by TechCADD featuring the AI dog Chichi.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: chichiImg,
        image2: chichiImg,
        eventDate: '7th February 2026',
        time: '4:30 PM - 5:00 PM',
        venue: 'TBD',
        tags: ['Talk', 'AI', 'Tech'],
        category: ['Day 1']
    },
    'mystery-ops-elimination': {
        id: 27,
        title: 'MYSTERY OPS - ELIMINATION',
        description: 'Elimination round for Mystery Ops.',
        registrationLink: 'https://unstop.com/college-fests/meraki-2026-indian-institute-of-information-technology-iiit-una-430446',
        brochure: '',
        price: '',
        icon: mysteryOpsIcon,
        image1: '',
        image2: '',
        eventDate: '7th February 2026',
        time: '5:00 PM - 6:00 PM',
        venue: 'Room No. 204',
        tags: ['Mystery', 'Competition', 'Elimination'],
        category: ['Day 1']
    },
    'talk-nidhish-bhatnagar': {
        id: 10,
        title: 'TALK - Col. Nidhish Bhatnagar',
        description: 'Talk by Colonel Nidhish Bhatnagar.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: nidhishBhatnagarImg,
        image2: nidhishBhatnagarImg,
        eventDate: '7th February 2026',
        time: '6:00 PM - 7:00 PM',
        venue: 'Room No. 227',
        tags: ['Talk', 'Defense', 'Inspiration'],
        category: ['Day 1']
    },
    'musical-night-day1': {
        id: 28,
        title: 'MUSICAL NIGHT',
        description: 'Musical night performance.',
        registrationLink: '',
        brochure: '',
        price: '',
        icon: musicalNightIcon,
        image1: '',
        image2: '',
        eventDate: '7th February 2026',
        time: '7:30 PM - 9:30 PM',
        venue: 'BasketBall Court',
        tags: ['Music', 'Fun', 'Cultural'],
        category: ['Day 1']
    },

    // =====================
    // MERAKI DAY 2 - 8th February 2026
    // =====================
    'bug-bash': {
        id: 9,
        title: 'BUG-BASH',
        description: 'Bug Bash is a hands-on technical event based on the Arduino Uno platform, designed to test participants’ debugging, logical reasoning, and circuit-building skills. Teams will work collaboratively to analyze a given problem statement, identify faults in provided Arduino code, and correct both software and hardware errors to achieve the desired output within a limited time.The event emphasizes real-world embedded system troubleshooting and practical problem-solving under pressure.',
        registrationLink: 'https://unstop.com/competitions/bug-bash-meraki-2026-indian-institute-of-information-technology-iiit-una-1627497',
        brochure: '',
        price: '',
        icon: bugBashIcon,
        image1: '',
        image2: '',
        eventDate: '8th February 2026',
        time: '9:00 AM - 10:30 AM',
        venue: 'Room No. 007',
        tags: ['Coding', 'Debugging', 'Competition'],
        category: ['Day 2']
    },
    'technical-talk-amit-shukla': {
        id: 6,
        title: 'TECHNICAL TALK - Dr. Amit Shukla',
        description: 'Technical talk by Dr. Amit Shukla.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: amitShuklaImg,
        image2: amitShuklaImg,
        eventDate: '8th February 2026',
        time: '10:30 AM - 12 PM',
        venue: 'OAT',
        tags: ['Talk', 'Technical'],
        category: ['Day 2']
    },
    'pixelforge': {
        id: 11,
        title: 'PIXELFORGE',
        description: 'PicxelForge is a multi-round, hands-on front-end web development event designed to test participants\' understanding of UI design, layout logic, and implementation skills. Participants will first analyze real-world UI components to understand how they are built, followed by a team-based challenge where they recreate a given UI design using HTML, CSS, and JavaScript. Accuracy, responsiveness, and clean implementation will determine the final winners.',
        registrationLink: 'https://unstop.com/p/pixelforge-indian-institute-of-information-technology-iiit-una-1628146',
        brochure: '',
        price: '',
        icon: pixelforgeIcon,
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
        description: 'Alumni session and experience sharing.',
        registrationLink: '',
        brochure: '',
        price: '',
        image1: rishavMishraImg,
        image2: rishavMishraImg,
        eventDate: '8th February 2026',
        time: '2:00 PM - 3:00 PM',
        venue: 'Room 228',
        tags: ['Talk', 'Alumni'],
        category: ['Day 2']
    },
    'robo-trace': {
        id: 14,
        title: 'ROBO-TRACE (LINE FOLLOWER ROBOT)',
        description: 'This event is a multi-round robotics challenge designed to test participants’ problem-solving ability, teamwork, and line-following robot performance. Teams will progress through a pre-event puzzle-based qualification round followed by high-speed knockout races on a structured track.',
        registrationLink: 'https://unstop.com/competitions/robo-trace-meraki-2026-indian-institute-of-information-technology-iiit-una-1627194',
        brochure: '',
        price: '',
        icon: roboTraceIcon,
        image1: '',
        image2: '',
        eventDate: '8th February 2026',
        time: '3:00 PM - 5:00 PM',
        venue: 'West Entrance, Academic Block',
        tags: ['Robotics', 'Line Follower', 'Competition'],
        category: ['Day 2']
    },
    'kaggle-clash': {
        id: 15,
        title: 'KAGGLE CLASH',
        description: 'Kaggle Clash is a competitive machine learning event designed to evaluate participants on model accuracy, computational efficiency, and conceptual understanding. Teams work under a strict time constraint on three distinct datasets—structured data, image data, and natural language data—requiring them to make strategic decisions on model selection and optimization. Participants must carefully balance performance with efficient use of computational resources, while demonstrating strong problem-solving skills and practical machine learning judgment under pressure.',
        registrationLink: 'https://unstop.com/competitions/kaggle-clash-meraki-2026-indian-institute-of-information-technology-iiit-una-1628150',
        brochure: '',
        price: '',
        icon: kaggleClashIcon,
        image1: '',
        image2: '',
        eventDate: '8th February 2026',
        time: '5:00 PM - 7:30 PM',
        venue: 'Room No. 103',
        tags: ['Data Science', 'ML', 'Competition'],
        category: ['Day 2']
    },
    'hackermaze': {
        id: 16,
        title: 'HACKERMAZE',
        description: 'HackerMaze is a Minecraft-themed, escape-room style technical event designed to test participants\' logical reasoning, aptitude, and coding skills under time constraints. Teams must solve puzzles, decode clues, and complete programming challenges to progress through different stages. The event emphasizes problem-solving ability, analytical thinking, and teamwork in an immersive and competitive environment.',
        registrationLink: 'https://unstop.com/college-fests/meraki-2026-indian-institute-of-information-technology-iiit-una-430446',
        brochure: '',
        price: '',
        icon: hackermazeIcon,
        image1: '',
        image2: '',
        eventDate: '8th February 2026',
        time: '5:30 PM - 7:30 PM',
        venue: 'Room No. 227/228, 133, 328, 204',
        tags: ['Hacking', 'Puzzle', 'Competition'],
        category: ['Day 2']
    },
    'robo-soccer': {
        id: 7,
        title: 'ROBO-SOCCER',
        description: 'A robotics-based head-to-head arena where teams design, build, and operate an Arduino and Bluetooth-controlled RC robot within a compact field. Two teams enter the arena simultaneously with the objective of pushing a lightweight ball into the opponent’s goal. The challenge emphasizes real-time decision-making and precision under pressure, encouraging innovation, coordination, and competitive problem-solving in a dynamic environment.',
        registrationLink: 'https://unstop.com/competitions/robo-soccer-meraki-2026-indian-institute-of-information-technology-iiit-una-1627487',
        brochure: '',
        price: '',
        oslug: 'robo-soccer',
        icon: roboSoccerIcon,
        image1: '',
        image2: '',
        eventDate: '7th February 2026',
        time: '7:30 PM - 9:00 PM',
        venue: 'TBD',
        tags: ['Robotics', 'Competition', 'Soccer'],
        category: ['Day 2']
    },

    // =====================
    // MERAKI DAY 3 - 9th February 2026
    // =====================
    'coding-casino': {
        id: 18,
        title: 'CODING CASINO',
        description: 'Coding Casino is an exciting, high-pressure coding event that blends DSA skills with an element of luck. Participants gamble virtual coins by spinning a DSA topic wheel and solving randomly assigned GFG problems. The event tests problem-solving ability, speed, and strategic decision-making in a fun and competitive casino-style environment.',
        registrationLink: 'https://unstop.com/college-fests/meraki-2026-indian-institute-of-information-technology-iiit-una-430446',
        brochure: '',
        price: '',
        icon: codingCasinoIcon,
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '9:30 AM - 11:30 AM',
        venue: 'Room No. 005',
        tags: ['Coding', 'Fun', 'Competition'],
        category: ['Day 3']
    },
    'mystery-ops': {
        id: 19,
        title: 'MYSTERY OPS',
        description: 'This event is a multi-round, escape-room style challenge designed to test participants\' logical thinking, observation skills, and teamwork. Participants will progress through an individual puzzle-based elimination round followed by a team-based challenge across multiple themed rooms. Strategy, coordination, and time management will determine the ultimate winner.',
        registrationLink: 'https://unstop.com/competitions/mystery-ops-meraki-2026-indian-institute-of-information-technology-iiit-una-1627508',
        brochure: '',
        price: '',
        icon: mysteryOpsIcon,
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '11:30 AM - 1:00 PM',
        venue: 'Room 326,327,328,329',
        tags: ['Mystery', 'Competition'],
        category: ['Day 3']
    },
    'ucpc': {
        id: 22,
        title: 'UCPC',
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
        description: 'Photography and framing competition.',
        registrationLink: 'https://unstop.com/college-fests/meraki-2026-indian-institute-of-information-technology-iiit-una-430446',
        brochure: '',
        price: '',
        icon: framoramaIcon,
        image1: '',
        image2: '',
        eventDate: '9th February 2026',
        time: '5:00 PM - 8:30 PM',
        venue: 'TBD',
        tags: ['Photography', 'Creative'],
        category: ['Day 3']
    },
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
export const getEliteEvents = () => eliteEvents;

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
export const getSpeakerSessions = () => [
    getEventById(5), // Defense Talk
    getEventById(26), // TechCADD
    getEventById(10), // COL. Nidhish
    getEventById(6), // Amit Shukla
    getEventById(12) // Alumni
].filter(Boolean);

/**
 * Get live events.
 * @returns {Array<Object>} Live events
 */
export const getLiveEvents = () => [];

/**
 * Get short description (first sentence) for an event.
 * @param {string} key - Event key
 * @returns {string} Short description
 */
export const getShortDescription = (key) => {
    const event = eventsData[key];
    return event ? event.description.split('.')[0] + '.' : '';
};
