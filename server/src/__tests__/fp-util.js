/**
 * Repeate `n` times function passed as argument
 *
 * @param {number} n - Number of function repetition
 *
 * @returns {repeatFnNTimes} - Function that will repeat `n` times the function passed as argument
 */
export const repeatFn = nb => fn => Array.from({ length: nb }).map(() => fn())

/**
 * @typedef repeatFnNTimes
 * @type {function}
 *
 * @param {function} fn - Fonction to repeat
 *
 * @returns {any[]} - An array of length `n` with results of each invoke of the function
 */
