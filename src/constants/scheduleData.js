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
 * Schedule entries with event references.
 * Each entry links to eventsData via slug.
 * 
 * @constant
 * @type {Object<number, Array<Object>>}
 */
export const scheduleData = {
    1: [
        { time: '10:00 AM', slug: 'skycircuit', eventId: 'EVT-101' },
        { time: '11:30 AM', slug: 'robodrive', eventId: 'EVT-102' },
        { time: '2:00 PM', slug: 'hack-the-throne', eventId: 'EVT-103' },
        { time: '4:00 PM', slug: 'arenax', eventId: 'EVT-104' },
    ],
    2: [
        { time: '9:00 AM', slug: 'robodrive', eventId: 'EVT-201' },
        { time: '11:00 AM', slug: 'hack-the-throne', eventId: 'EVT-202' },
        { time: '2:00 PM', slug: 'skycircuit', eventId: 'EVT-203' },
        { time: '4:30 PM', slug: 'arenax', eventId: 'EVT-204' },
    ],
    3: [
        { time: '10:00 AM', slug: 'skycircuit', eventId: 'EVT-301' },
        { time: '1:00 PM', slug: 'robodrive', eventId: 'EVT-302' },
        { time: '3:00 PM', slug: 'hack-the-throne', eventId: 'EVT-303' },
    ]
};

/**
 * Get enriched schedule data with full event details.
 * @param {number} day - Day number (1, 2, or 3)
 * @returns {Array<Object>} Schedule with event details
 */
export const getScheduleForDay = (day) => {
    return (scheduleData[day] || []).map(entry => ({
        ...entry,
        event: eventsData[entry.slug] || null
    }));
};
