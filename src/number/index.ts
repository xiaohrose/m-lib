
import Decimal from 'decimal.js';

/**
 * Converts a number to a specified number of decimal places.
 *
 * @param origin - The original number to be converted. If the value is falsy, it will be returned as is.
 * @param decimalPlaces - The number of decimal places to round to. Defaults to 2 if not provided.
 * @returns The number rounded to the specified decimal places.
 */
export function toDecimalPlaces(origin: number, decimalPlaces: number = 2): number {
    if (origin == null || isNaN(origin)) return origin;
    return Decimal(origin).toDecimalPlaces(decimalPlaces).toNumber();
}
