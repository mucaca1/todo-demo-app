/**
 * Field Value Formatters
 *
 * Common utility functions for formatting field values
 * for display in the history viewer.
 */

/**
 * Formats a date/timestamp value as a localized string.
 * @param value - Date timestamp or Date object
 * @param locale - Locale for formatting (default: user's locale)
 * @returns Formatted date string or "Not set" if null/undefined
 */
export function formatDate(
  value: unknown,
  locale?: string
): string {
  if (value === null || value === undefined) {
    return "Not set";
  }

  const date = typeof value === 'number'
    ? new Date(value)
    : value instanceof Date
      ? value
      : null;

  if (!date || isNaN(date.getTime())) {
    return String(value);
  }

  return date.toLocaleString(locale ?? undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * Formats a boolean value as human-readable text.
 * @param value - Boolean value (may be number 0/1 from database)
 * @param options - Display options
 * @returns "Yes"/"No" or custom labels
 */
export function formatBoolean(
  value: unknown,
  options: {
    trueLabel?: string;
    falseLabel?: string;
    nullLabel?: string;
  } = {}
): string {
  const { trueLabel = "Yes", falseLabel = "No", nullLabel = "Not set" } = options;

  if (value === null || value === undefined) {
    return nullLabel;
  }

  // Handle database booleans stored as 0/1
  const boolValue = value === 1 || value === true;

  return boolValue ? trueLabel : falseLabel;
}

/**
 * Formats null/undefined values with a placeholder.
 * @param value - Any value
 * @param placeholder - Text to show for null/undefined (default: "Empty")
 * @returns Placeholder or stringified value
 */
export function formatNull(
  value: unknown,
  placeholder: string = "Empty"
): string {
  if (value === null || value === undefined) {
    return placeholder;
  }
  return String(value);
}

/**
 * Formats empty strings with a placeholder.
 * @param value - Any value
 * @param placeholder - Text to show for empty strings (default: "Empty")
 * @returns Placeholder or stringified value
 */
export function formatEmpty(
  value: unknown,
  placeholder: string = "Empty"
): string {
  if (value === "") {
    return placeholder;
  }
  if (value === null || value === undefined) {
    return placeholder;
  }
  return String(value);
}

/**
 * Truncates long text with ellipsis.
 * @param value - Text value
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with "..."
 */
export function truncateText(
  value: unknown,
  maxLength: number = 50
): string {
  const text = String(value ?? "");
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}

/**
 * Formats an array as a comma-separated list.
 * @param value - Array value
 * @param separator - Separator string (default: ", ")
 * @returns Formatted list or "Empty" for null/empty arrays
 */
export function formatArray(
  value: unknown,
  separator: string = ", "
): string {
  if (value === null || value === undefined) {
    return "Empty";
  }
  if (!Array.isArray(value)) {
    return String(value);
  }
  if (value.length === 0) {
    return "Empty";
  }
  return value.join(separator);
}

/**
 * Formats completion status for Todo items.
 * @param value - Boolean or number completion status
 * @returns "Completed" or "Incomplete"
 */
export function formatCompletionStatus(value: unknown): string {
  return formatBoolean(value, {
    trueLabel: "Completed",
    falseLabel: "Incomplete",
  });
}

/**
 * Formats color values (e.g., for Tag items).
 * @param value - Color value (hex code or color name)
 * @returns Color name or hex code
 */
export function formatColor(value: unknown): string {
  if (value === null || value === undefined) {
    return "No color";
  }
  return String(value);
}
