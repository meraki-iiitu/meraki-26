/**
 * @fileoverview Event schedule data organized by day.
 * Uses eventsData as the single source of truth.
 * 
 * @module constants/scheduleData
 */

import { eventsData } from './eventsData';

/**
 * Feature flag to show/hide schedule.
 * @constant
 * @type {boolean}
 */
export const showSchedule = true;

/**
 * Pre-fest elimination schedule.
 * 
 * @constant
 * @type {Object}
 */
export const eliminationSchedule = {
    'day1': {
        date: '3rd February 2026 (Wednesday)',
        title: 'Elimination Round Day - 1',
        events: [
            { key: 'workshops', eventId: 'ELIM-001', time: '5:30 PM - 7:30 PM' }
        ]
    },
    'day2': {
        date: '4th February 2026 (Wednesday)',
        title: 'Elimination Round Day - 2',
        events: [
            { key: 'robo-drive-elimination', eventId: 'ELIM-002', time: '5:30 PM - 6:30 PM' },
            { key: 'bug-bash-elimination', eventId: 'ELIM-003', time: '6:45 PM - 7:30 PM' }
        ]
    },
    'day3': {
        date: '5th February 2026 (Thursday)',
        title: 'Elimination Round Day - 3',
        events: [
            { key: 'robo-trace-elimination', eventId: 'ELIM-004', time: '5:30 PM - 6:30 PM' },
            { key: 'mystery-ops-elimination', eventId: 'ELIM-005', time: '6:30 PM - 7:30 PM' }
        ]
    },
    'day4': {
        date: '6th February 2026 (Friday)',
        title: 'Elimination Round Day - 4',
        events: [
            { key: 'ucpc-elimination', eventId: 'ELIM-006', time: '5:30 PM - 7:30 PM' }
        ]
    }
};

/**
 * Main fest schedule entries with event references.
 * Each entry links to eventsData via key.
 * 
 * @constant
 * @type {Object<number, Object>}
 */
export const scheduleData = {
    1: {
        date: '7th February 2026 (Saturday)',
        title: 'MERAKI Day - 1',
        dayCoordinator: 'Avadh, Aditya Pandey, Sheena',
        events: [
            { key: 'inauguration', eventId: 'D1-001', time: '9:30 AM - 1:00 PM' },
            { key: 'innovation-expo', eventId: 'D1-002', time: '11:30 AM - 3:00 PM' },
            { key: 'hack-the-throne', eventId: 'D1-003', time: '12:00 PM - 1:00 PM' },
            { key: 'skycircuit', eventId: 'D1-004', time: '1:30 PM - 3:30 PM' },
            { key: 'defense-talk', eventId: 'D1-005', time: '3:30 PM - 5:00 PM' },
            { key: 'mystery-ops-day1', eventId: 'D1-006', time: '5:00 PM - 6:00 PM' },
            { key: 'technical-talk-amit-shukla', eventId: 'D1-007', time: '6:00 PM - 7:00 PM' },
            { key: 'robo-soccer', eventId: 'D1-008', time: '7:30 PM - 9:00 PM' },
            { key: 'arenax-day1', eventId: 'D1-009', time: '9:30 PM - 11:00 PM' }
        ]
    },
    2: {
        date: '8th February 2026 (Sunday)',
        title: 'MERAKI Day - 2',
        dayCoordinator: 'Aryan Raj, Jayani',
        events: [
            { key: 'bug-bash', eventId: 'D2-001', time: '9:00 AM - 10:30 AM' },
            { key: 'talk-nidhish-bhatnagar', eventId: 'D2-002', time: '10:30 AM - 12:00 PM' },
            { key: 'pixelforge', eventId: 'D2-003', time: '11:30 AM - 1:30 PM' },
            { key: 'hack-the-throne-judgement', eventId: 'D2-004', time: '12:00 PM - 5:00 PM' },
            { key: 'alumni-session', eventId: 'D2-005', time: '2:00 PM - 3:00 PM' },
            { key: 'mentor-minds', eventId: 'D2-006', time: '2:00 PM - 3:00 PM' },
            { key: 'robo-trace', eventId: 'D2-007', time: '3:00 PM - 5:00 PM' },
            { key: 'kaggle-clash', eventId: 'D2-008', time: '5:00 PM - 7:30 PM' },
            { key: 'hackermaze', eventId: 'D2-009', time: '5:30 PM - 7:30 PM' },
            { key: 'pro-night', eventId: 'D2-010', time: '7:30 PM - 9:00 PM' },
            { key: 'arenax-day2', eventId: 'D2-011', time: '9:00 PM - 11:00 PM' }
        ]
    },
    3: {
        date: '9th February 2026 (Monday)',
        title: 'MERAKI Day - 3',
        dayCoordinator: 'Ridham, Purusharth Rana',
        events: [
            { key: 'coding-casino', eventId: 'D3-001', time: '9:30 AM - 11:30 AM' },
            { key: 'mystery-ops', eventId: 'D3-002', time: '11:30 AM - 1:00 PM' },
            { key: 'bot-or-brain', eventId: 'D3-003', time: '2:00 PM - 5:00 PM' },
            { key: 'scalesquest', eventId: 'D3-004', time: '2:00 PM - 5:00 PM' },
            { key: 'ucpc', eventId: 'D3-005', time: '2:00 PM - 5:00 PM' },
            { key: 'framorama', eventId: 'D3-006', time: '5:00 PM' },
            { key: 'robodrive', eventId: 'D3-007', time: '5:00 PM - 8:30 PM' },
            { key: 'musical-night-closing', eventId: 'D3-008', time: '9:00 PM - 11:00 PM' }
        ]
    }
};

/**
 * Get enriched schedule data with full event details.
 * @param {number} day - Day number (1, 2, or 3)
 * @returns {Array<Object>} Schedule with event details
 */
export const getScheduleForDay = (day) => {
    const dayData = scheduleData[day];
    if (!dayData) return [];
    
    return dayData.events.map(entry => ({
        ...entry,
        event: eventsData[entry.key] || null
    }));
};

/**
 * Get elimination schedule with full event details.
 * @param {string} day - Day key (day1, day2, day3, day4)
 * @returns {Array<Object>} Schedule with event details
 */
export const getEliminationScheduleForDay = (day) => {
    const dayData = eliminationSchedule[day];
    if (!dayData) return [];
    
    return dayData.events.map(entry => ({
        ...entry,
        event: eventsData[entry.key] || null
    }));
};
