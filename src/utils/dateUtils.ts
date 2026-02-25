/**
 * Date utility functions
 */

import { DateIso } from '@evolu/common';

/**
 * Creates a DateIso from a Date object or ISO string
 * @param date - Date object or ISO string
 * @returns DateIso if valid, null if invalid
 */
export function toDateIso(date: Date | string): DateIso | null {
    const isoString = typeof date === 'string' ? date : date.toISOString();
    const result = DateIso.from(isoString);
    return result.ok ? result.value : null;
}

/**
 * Gets the current date as a DateIso
 * @returns DateIso for the current time, or null if conversion fails
 */
export function getCurrentDateIso(): DateIso | null {
    return toDateIso(new Date());
}

/**
 * Formats a date for display in the UI
 * @param date - Date object, ISO string, or null/undefined
 * @param locale - Optional locale string (defaults to browser locale)
 * @returns Formatted date string or empty string if invalid
 */
export function formatDateForDisplay(
    date: Date | string | null | undefined,
    locale?: string
): string {
    if (!date) return '';

    const dateObj = typeof date === 'string' ? new Date(date) : date;

    if (isNaN(dateObj.getTime())) return '';

    return dateObj.toLocaleDateString(locale || undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

/**
 * Formats a date with time for display in the UI
 * @param date - Date object, ISO string, or null/undefined
 * @param locale - Optional locale string (defaults to browser locale)
 * @returns Formatted date-time string or empty string if invalid
 */
export function formatDateTimeForDisplay(
    date: Date | string | null | undefined,
    locale?: string
): string {
    if (!date) return '';

    const dateObj = typeof date === 'string' ? new Date(date) : date;

    if (isNaN(dateObj.getTime())) return '';

    return dateObj.toLocaleString(locale || undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
}

/**
 * Checks if a date is today
 * @param date - Date object or ISO string
 * @returns true if the date is today
 */
export function isToday(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const today = new Date();
    return (
        dateObj.getFullYear() === today.getFullYear() &&
        dateObj.getMonth() === today.getMonth() &&
        dateObj.getDate() === today.getDate()
    );
}

/**
 * Checks if a date is in the past
 * @param date - Date object or ISO string
 * @returns true if the date is in the past
 */
export function isPast(date: Date | string): boolean {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return dateObj.getTime() < Date.now();
}
