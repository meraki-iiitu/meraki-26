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
import roboDriveImg from "../assets/robo_drive.webp";
import hackTheThroneImg from "../assets/hack_the_throne.webp";
import arenaXImg from "../assets/arena_x.webp";
import cairLogo from "../assets/sponsors/iitlogo.webp";
import aerostarLogo from "../assets/sponsors/aerostar.webp";
import agastyaLogo from "../assets/agastya.jpg";
import teamShaktiLogo from "../assets/team_shakti.webp";

/**
 * Master events data object keyed by event key.
 * 
 * @constant
 * @type {Object<string, Object>}
 */
export const eventsData = {
    // =====================
    // PRE-FEST ELIMINATION ROUNDS
    // =====================
    'workshops': {
        id: 1,
        title: 'WORKSHOPS',
        description: 'Pre-fest workshops to prepare participants for the main events.',
        isElite: false,
        comingSoon: false,
        tags: ['Workshop', 'Learning'],
        eventDate: '3rd February 2026',
        time: '5:30 PM - 7:30 PM',
        venue: 'Lab 221, 222',
        facultyCoordinator: 'Avadh Agarwal, Aditya Pandey',
        studentCoordinator: 'Shashi Bhushan Raj, Sri Krishna',
        category: 'elimination'
    },
    'robo-drive-elimination': {
        id: 2,
        title: 'ROBO-DRIVE / ROBO-SOCCER (Elimination)',
        description: 'Elimination round for Robo-Drive and Robo-Soccer competitions.',
        isElite: false,
        comingSoon: false,
        tags: ['Robotics', 'Competition'],
        eventDate: '4th February 2026',
        time: '5:30 PM - 6:30 PM',
        venue: 'Room No. 227',
        facultyCoordinator: 'Manan Babbar, Mayank Joshi',
        studentCoordinator: 'Pulkit Sujan, Shashi Bhushan Raj, Lokesh Agarwal',
        category: 'elimination'
    },
    'bug-bash-elimination': {
        id: 3,
        title: 'BUG-BASH (Elimination)',
        description: 'Elimination round for Bug-Bash debugging competition.',
        isElite: false,
        comingSoon: false,
        tags: ['Coding', 'Debugging'],
        eventDate: '4th February 2026',
        time: '6:45 PM - 7:30 PM',
        venue: 'Room No. 227',
        facultyCoordinator: 'Kishan Rai',
        studentCoordinator: 'Maharth Kharbanda',
        category: 'elimination'
    },
    'robo-trace-elimination': {
        id: 4,
        title: 'ROBO-TRACE (Elimination)',
        description: 'Elimination round for Line Follower Robot competition.',
        isElite: false,
        comingSoon: false,
        tags: ['Robotics', 'Line Follower'],
        eventDate: '5th February 2026',
        time: '5:30 PM - 6:30 PM',
        venue: 'Room No. 227',
        facultyCoordinator: 'Avadh Agarwal, Abhishek Nishad',
        studentCoordinator: 'Sheena, Aditya Pandey',
        category: 'elimination'
    },
    'mystery-ops-elimination': {
        id: 5,
        title: 'MYSTERY OPS (Elimination)',
        description: 'Elimination round for Mystery Ops event.',
        isElite: false,
        comingSoon: false,
        tags: ['Mystery', 'Competition'],
        eventDate: '5th February 2026',
        time: '6:30 PM - 7:30 PM',
        venue: 'Room No. 120',
        facultyCoordinator: 'Sundaram Gupta',
        studentCoordinator: 'Aayush Arya, Rishik',
        category: 'elimination'
    },
    'ucpc-elimination': {
        id: 6,
        title: 'UCPC (Elimination)',
        description: 'Elimination round for UCPC competitive programming contest.',
        isElite: false,
        comingSoon: false,
        tags: ['Coding', 'Competitive Programming'],
        eventDate: '6th February 2026',
        time: '5:30 PM - 7:30 PM',
        venue: 'Room No. 227',
        facultyCoordinator: 'Purusharth Rana',
        studentCoordinator: 'Saksham Sangwan, Parth Sharma',
        category: 'elimination'
    },

    // =====================
    // MERAKI DAY 1 - 7th February 2026
    // =====================
    'inauguration': {
        id: 7,
        title: 'MERAKI INAUGURATION / OPENING CEREMONY',
        description: 'Grand opening ceremony of Meraki 2026.',
        isElite: false,
        comingSoon: false,
        tags: ['Ceremony', 'Opening'],
        eventDate: '7th February 2026',
        time: '9:30 AM - 1:00 PM',
        venue: 'OAT',
        facultyCoordinator: 'Rishav Raj',
        studentCoordinator: 'Vineet Agrawal',
        dayCoordinator: 'Avadh, Aditya Pandey, Sheena',
        category: 'day1'
    },
    'innovation-expo': {
        id: 8,
        title: 'INNOVATION EXPO',
        description: 'Exhibition showcasing innovative projects and ideas.',
        isElite: false,
        comingSoon: false,
        tags: ['Innovation', 'Exhibition'],
        eventDate: '7th February 2026',
        time: '11:30 AM - 03:00 PM',
        venue: 'IIIT Una Campus',
        facultyCoordinator: 'Rishav Raj',
        studentCoordinator: 'Ayan Mishra, Sri Krishna, Yuvraj Singh Chouhan',
        category: 'day1'
    },
    'hack-the-throne': {
        id: 9,
        title: 'HACK-THE-THRONE',
        image: hackTheThroneImg,
        description: 'Hack-The-Throne is a national-level inter-college 24-hour hackathon organized under Meraki 2026, the Annual Tech Fest. It is exclusively designed for students who want to move beyond theoretical learning and apply their technical knowledge to solve real-world problems. The hackathon provides a structured and competitive environment where teams ideate, pitch, and build practical solutions under strict time and evaluation constraints, closely simulating real industry hackathons and startup ecosystems.\n\nHackathon Themes:\n• Sustainability & Green Technology\n• FinTech & Digital Innovation\n• Health Technology\n• Smart Automation\n• Digital Security Systems',
        isElite: true,
        comingSoon: false,
        price: '₹48000/-',
        tags: ['Coding', 'Hackathon', 'Innovation', 'Tech', 'National Level'],
        eventDate: '7th-8th February 2026',
        time: 'Opening: 12:00 PM - 1:00 PM (Day 1), Judgement: 12:00 PM - 5:00 PM (Day 2)',
        venue: 'Room No. 102, 103, 104, 227',
        facultyCoordinator: 'Pranav Garg',
        studentCoordinator: 'Vansh Verma, Purusharth Rana, Ridham, Naitik Pal, Yuvraj Singh, Aditya Kumar',
        contact: 'meraki@iiitu.ac.in | +91 9721234663',
        brochureLink: '/brochures/hackathone.pdf',
        registerLink: 'https://hack-the-throne.devfolio.co/overview',
        category: 'day1'
    },
    'skycircuit': {
        id: 10,
        title: 'SKYCIRCUIT',
        image: skyCircuitImg,
        description: 'SkyCircuit is a high-impact technical exhibition designed to bring together institute drone teams, research groups, and drone technology startups on a single platform. The event aims to highlight the rapid advancements in UAV technology, foster knowledge exchange between academia and industry, and inspire students through real-world applications of drones.',
        isElite: true,
        comingSoon: false,
        tags: ['Aeromodelling', 'Drones', 'Aircrafts', 'FPVs'],
        eventDate: '7th February 2026',
        time: '1:30 PM - 3:30 PM',
        venue: 'Football Ground',
        facultyCoordinator: 'Tanishq Singh',
        studentCoordinator: 'Deepu Vishwakarma',
        contact: 'meraki@iiitu.ac.in | +91 7017488532',
        registerLink: 'mailto:meraki@iiitu.ac.in?subject=Sky Circuit Registration&body=Hello, I would like to showcase something cool at Sky Circuit event',
        buttonText: 'JOIN US',
        sponsors: [
            { name: "CAIR", institution: "IIT Mandi", logo: cairLogo, type: "Title Sponsor" },
            { name: "AEROSTAR", logo: aerostarLogo, type: "Co-Sponsor" },
            { name: "Agastya Club", institution: "NIT Jalandhar", logo: agastyaLogo, type: "Event Patron" },
            { name: "Team Shakti", institution: "Chitkara University", logo: teamShaktiLogo, type: "Event Patron" }
        ],
        category: 'day1'
    },
    'defense-talk': {
        id: 11,
        title: 'DEFENSE TALK - Wg Cmdr Sonika Tanwar',
        description: 'Inspiring defense talk by Wing Commander Sonika Tanwar.',
        isElite: false,
        comingSoon: false,
        tags: ['Talk', 'Defense', 'Inspiration'],
        eventDate: '7th February 2026',
        time: '3:30 PM - 5:00 PM',
        venue: 'OAT',
        facultyCoordinator: 'Tanishq Singh',
        studentCoordinator: 'Rahul Chadak',
        category: 'day1'
    },
    'mystery-ops-day1': {
        id: 12,
        title: 'MYSTERY OPS (Elimination)',
        description: 'Mystery operations elimination round.',
        isElite: false,
        comingSoon: false,
        tags: ['Mystery', 'Competition'],
        eventDate: '7th February 2026',
        time: '5:00 PM - 6:00 PM',
        venue: 'Room No. 204',
        studentCoordinator: 'Jayani, Aryan Raj, Ankush Sharma',
        category: 'day1'
    },
    'technical-talk-amit-shukla': {
        id: 13,
        title: 'TECHNICAL TALK - Dr. Amit Shukla',
        description: 'Technical talk by Dr. Amit Shukla.',
        isElite: false,
        comingSoon: false,
        tags: ['Talk', 'Technical'],
        eventDate: '7th February 2026',
        time: '6:00 PM - 7:00 PM',
        venue: 'Room No. 227',
        facultyCoordinator: 'Pranav Garg, Tanishq Singh',
        studentCoordinator: 'Naitik Pal',
        category: 'day1'
    },
    'robo-soccer': {
        id: 14,
        title: 'ROBO-SOCCER',
        description: 'Robotic soccer competition where robots battle it out on the field.',
        isElite: false,
        comingSoon: false,
        tags: ['Robotics', 'Competition', 'Soccer'],
        eventDate: '7th February 2026',
        time: '7:30 PM - 9:00 PM',
        venue: 'BasketBall Court',
        studentCoordinator: 'Shashi Bhushan Raj, Lokesh Agarwal',
        category: 'day1'
    },
    'arenax-day1': {
        id: 15,
        title: 'ARENAX SPORTS CARNIVAL - I',
        image: arenaXImg,
        description: 'ArenaX Game Carnival is a high-energy esports event featuring competitive battles in BGMI, Clash Royale, and Valorant.',
        isElite: true,
        comingSoon: false,
        price: '₹12000/-',
        tags: ['Esports', 'Gaming', 'BGMI', 'Valorant'],
        eventDate: '7th February 2026',
        time: '9:30 PM - 11:00 PM',
        venue: 'Room No. 204',
        studentCoordinator: 'Mayank Gulshan, Yash Mishra',
        category: 'day1'
    },

    // =====================
    // MERAKI DAY 2 - 8th February 2026
    // =====================
    'hack-the-throne-judgement': {
        id: 16,
        title: 'HACK-THE-THRONE (Judgement)',
        image: hackTheThroneImg,
        description: 'Hack-The-Throne hackathon judgement round - teams present their solutions to the judges.',
        isElite: true,
        comingSoon: false,
        price: '₹48000/-',
        tags: ['Coding', 'Hackathon', 'Innovation', 'Tech', 'National Level'],
        eventDate: '8th February 2026',
        time: '12:00 PM - 5:00 PM',
        venue: 'Room No. 102, 103, 104, 227',
        facultyCoordinator: 'Pranav Garg',
        studentCoordinator: 'Vansh Verma, Purusharth Rana, Ridham, Naitik Pal, Aditya Kumar',
        contact: 'meraki@iiitu.ac.in | +91 9721234663',
        category: 'day2'
    },
    'bug-bash': {
        id: 17,
        title: 'BUG-BASH',
        description: 'Debugging competition to find and fix bugs in code.',
        isElite: false,
        comingSoon: false,
        tags: ['Coding', 'Debugging', 'Competition'],
        eventDate: '8th February 2026',
        time: '9:00 AM - 10:30 AM',
        venue: 'Room No. 222',
        facultyCoordinator: 'Kishan Rai',
        studentCoordinator: 'Maharth Kharbanda',
        dayCoordinator: 'Aryan Raj, Jayani',
        category: 'day2'
    },
    'talk-nidhish-bhatnagar': {
        id: 18,
        title: 'TALK - Col. Nidhish Bhatnagar',
        description: 'Talk by Colonel Nidhish Bhatnagar.',
        isElite: false,
        comingSoon: false,
        tags: ['Talk', 'Defense', 'Inspiration'],
        eventDate: '8th February 2026',
        time: '10:30 AM - 12:00 PM',
        venue: 'OAT',
        facultyCoordinator: 'Tanishq Singh',
        studentCoordinator: 'Rahul Chadak',
        category: 'day2'
    },
    'pixelforge': {
        id: 19,
        title: 'PIXELFORGE',
        description: 'Creative design and digital art competition.',
        isElite: false,
        comingSoon: false,
        tags: ['Design', 'Art', 'Creative'],
        eventDate: '8th February 2026',
        time: '11:30 AM - 1:30 PM',
        venue: 'Room No. 006',
        facultyCoordinator: 'Sundaram Gupta',
        studentCoordinator: 'Aayush Arya, Rishik',
        category: 'day2'
    },
    'alumni-session': {
        id: 20,
        title: 'ALUMNI SESSION - Rishav Sir',
        description: 'Alumni session and experience sharing.',
        isElite: false,
        comingSoon: false,
        tags: ['Talk', 'Alumni'],
        eventDate: '8th February 2026',
        time: '2:00 PM - 3:00 PM',
        venue: 'IIIT Una Campus',
        facultyCoordinator: 'Pranav Garg',
        studentCoordinator: 'Pulkit Sujaan',
        category: 'day2'
    },
    'mentor-minds': {
        id: 21,
        title: 'MENTOR MINDS (For Faculty)',
        description: 'Faculty engagement and mentorship session.',
        isElite: false,
        comingSoon: false,
        tags: ['Faculty', 'Mentorship'],
        eventDate: '8th February 2026',
        time: '2:00 PM - 3:00 PM',
        venue: 'OAT',
        studentCoordinator: 'Vinit Aggarwal',
        category: 'day2'
    },
    'robo-trace': {
        id: 22,
        title: 'ROBO-TRACE (LINE FOLLOWER ROBOT)',
        description: 'Line follower robot competition where robots navigate a predefined path.',
        isElite: false,
        comingSoon: false,
        tags: ['Robotics', 'Line Follower', 'Competition'],
        eventDate: '8th February 2026',
        time: '3:00 PM - 5:00 PM',
        venue: 'West Entrance, ACAD',
        facultyCoordinator: 'Pranav Garg, Avadh Agarwal, Abhishek Nishad',
        studentCoordinator: 'Sheena, Aditya Pandey',
        category: 'day2'
    },
    'kaggle-clash': {
        id: 23,
        title: 'KAGGLE CLASH',
        description: 'Data science competition on Kaggle platform.',
        isElite: false,
        comingSoon: false,
        tags: ['Data Science', 'ML', 'Competition'],
        eventDate: '8th February 2026',
        time: '5:00 PM - 7:30 PM',
        venue: 'Room No. 006',
        facultyCoordinator: 'Girdhar Gopal',
        studentCoordinator: 'Sri Krishna, Shivansh',
        category: 'day2'
    },
    'hackermaze': {
        id: 24,
        title: 'HACKERMAZE',
        description: 'Maze-solving and hacking challenge.',
        isElite: false,
        comingSoon: false,
        tags: ['Hacking', 'Puzzle', 'Competition'],
        eventDate: '8th February 2026',
        time: '5:30 PM - 7:30 PM',
        venue: 'Room No. 225, 226, 227, 230, 231',
        studentCoordinator: 'Rudraksh, Shaurya Pandey, Dhruv Rana, Shashwat Singh',
        category: 'day2'
    },
    'pro-night': {
        id: 25,
        title: 'PRO NIGHT',
        description: 'Professional night event with special performances.',
        isElite: false,
        comingSoon: false,
        tags: ['Entertainment', 'Night'],
        eventDate: '8th February 2026',
        time: '7:30 PM - 9:00 PM',
        venue: 'IIIT Una Campus',
        facultyCoordinator: 'Rishav Raj',
        studentCoordinator: 'Awadh Agrawal, Ayan Mishra',
        category: 'day2'
    },
    'arenax-day2': {
        id: 26,
        title: 'ARENAX SPORTS CARNIVAL - II',
        image: arenaXImg,
        description: 'Day 2 of ArenaX Game Carnival esports competition.',
        isElite: true,
        comingSoon: false,
        price: '₹12000/-',
        tags: ['Esports', 'Gaming', 'BGMI', 'Valorant'],
        eventDate: '8th February 2026',
        time: '9:00 PM - 11:00 PM',
        venue: 'Room No. 204',
        studentCoordinator: 'Mayank Gulshan, Yash Mishra',
        category: 'day2'
    },

    // =====================
    // MERAKI DAY 3 - 9th February 2026
    // =====================
    'coding-casino': {
        id: 27,
        title: 'CODING CASINO',
        description: 'Fun coding competition with a casino twist.',
        isElite: false,
        comingSoon: false,
        tags: ['Coding', 'Fun', 'Competition'],
        eventDate: '9th February 2026',
        time: '9:30 AM - 11:30 AM',
        venue: 'Room No. 104',
        facultyCoordinator: 'Srinivas Prabhu',
        studentCoordinator: 'Ridham, Purusharth Rana',
        dayCoordinator: 'Ridham, Purusharth Rana',
        category: 'day3'
    },
    'mystery-ops': {
        id: 28,
        title: 'MYSTERY OPS',
        description: 'Mystery operations final round.',
        isElite: false,
        comingSoon: false,
        tags: ['Mystery', 'Competition'],
        eventDate: '9th February 2026',
        time: '11:30 AM - 1:00 PM',
        venue: 'IIIT Una Campus',
        studentCoordinator: 'Jayani Srivastava, Aryan Raj, Ankush Sharma',
        category: 'day3'
    },
    'bot-or-brain': {
        id: 29,
        title: 'BOT OR BRAIN (For Faculty)',
        description: 'AI vs Human faculty challenge.',
        isElite: false,
        comingSoon: false,
        tags: ['AI', 'Faculty', 'Fun'],
        eventDate: '9th February 2026',
        time: '2:00 PM - 5:00 PM',
        venue: 'OAT',
        facultyCoordinator: 'Rishav Raj',
        studentCoordinator: 'Aarohi Aggarwal, Vanshiv Garg',
        category: 'day3'
    },
    'scalesquest': {
        id: 30,
        title: 'SCALESQUEST (For Faculty)',
        description: 'Faculty engagement competition.',
        isElite: false,
        comingSoon: false,
        tags: ['Faculty', 'Competition'],
        eventDate: '9th February 2026',
        time: '2:00 PM - 5:00 PM',
        venue: 'OAT',
        facultyCoordinator: 'Rishav Raj',
        studentCoordinator: 'Jayani Srivastva, Avadh Agarwal',
        category: 'day3'
    },
    'ucpc': {
        id: 31,
        title: 'UCPC',
        description: 'Una Competitive Programming Championship - the ultimate coding showdown.',
        isElite: false,
        comingSoon: false,
        tags: ['Coding', 'Competitive Programming'],
        eventDate: '9th February 2026',
        time: '2:00 PM - 5:00 PM',
        venue: 'Room No. 006',
        facultyCoordinator: 'Krish Choudhary',
        studentCoordinator: 'Purusharth Rana, Saksham Sangwan, Parth Sharma',
        category: 'day3'
    },
    'framorama': {
        id: 32,
        title: 'FRAMORAMA',
        description: 'Photography and framing competition.',
        isElite: false,
        comingSoon: false,
        tags: ['Photography', 'Creative'],
        eventDate: '9th February 2026',
        time: '5:00 PM',
        venue: 'PIXCEL',
        category: 'day3'
    },
    'robodrive': {
        id: 33,
        title: 'ROBODRIVE',
        image: roboDriveImg,
        description: 'Robo Drive is a robotics competition where teams design and manually control a robot car to complete a predefined track in the shortest possible time. The track includes sharp turns, obstacles, and checkpoints that must be navigated strictly according to the event rules.',
        isElite: true,
        comingSoon: false,
        price: '₹20000/-',
        tags: ['Robotics', 'Engineering', 'Competition', 'Innovation'],
        eventDate: '9th February 2026',
        time: '5:00 PM - 8:30 PM',
        venue: 'Assembly Point, Admin Block',
        facultyCoordinator: 'Vineet Agarwal',
        studentCoordinator: 'Manan Babbar, Mayank Joshi, Pulkit Sujan, Nurandu Sri Krishna',
        contact: 'meraki@iiitu.ac.in | +91 6283746751',
        brochureLink: '/brochures/Event Brochure - Robo Drive.pdf',
        registerLink: 'https://unstop.com/p/robodrive-meraki-2026-indian-institute-of-information-technology-iiit-una-1617278',
        category: 'day3'
    },
    'musical-night-closing': {
        id: 34,
        title: 'MUSICAL NIGHT & CLOSING CEREMONY',
        description: 'Grand closing ceremony with musical performances by SARGAM.',
        isElite: false,
        comingSoon: false,
        tags: ['Music', 'Ceremony', 'Closing'],
        eventDate: '9th February 2026',
        time: '9:00 PM - 11:00 PM',
        venue: 'OAT',
        studentCoordinator: 'SARGAM',
        category: 'day3'
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
 * Get events by category.
 * @param {string} category - Category (elimination, day1, day2, day3)
 * @returns {Array<Object>} Events in category
 */
export const getEventsByCategory = (category) => getAllEvents().filter(e => e.category === category);

/**
 * Get elimination round events.
 * @returns {Array<Object>} Elimination events
 */
export const getEliminationEvents = () => getEventsByCategory('elimination');

/**
 * Get Day 1 events.
 * @returns {Array<Object>} Day 1 events
 */
export const getDay1Events = () => getEventsByCategory('day1');

/**
 * Get Day 2 events.
 * @returns {Array<Object>} Day 2 events
 */
export const getDay2Events = () => getEventsByCategory('day2');

/**
 * Get Day 3 events.
 * @returns {Array<Object>} Day 3 events
 */
export const getDay3Events = () => getEventsByCategory('day3');

/**
 * Get short description (first sentence) for an event.
 * @param {string} key - Event key
 * @returns {string} Short description
 */
export const getShortDescription = (key) => {
    const event = eventsData[key];
    return event ? event.description.split('.')[0] + '.' : '';
};

