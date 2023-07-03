/**
 * Write a function, countOccurrences which takes a string and returns an object
 * detailing the number of occurrences in the string of each letter in the string.
 * 
 * E.g. INPUT: “HELLO”, RETURNS: {”E”: 1, “O”: 1, “H”: 1, “L”: 2}
 * 
 * program name - countOccurrences
 * input - str: string
 * return - object
 * 
 * pesudocode:
 * create new empty object called occurrences
 * for each CHAR in input str
 *  if (occurrences[CHAR.uppercase()])
 *      THEN occurrences[CHAR.uppercase()] += 1
 *  else
 *       occurrences[CHAR.uppercase()] = 1
 * return occurrences
*/

function countOccurrences(str) {
    const occurrences = {}
    for (const char of str) {
        if (occurrences[char.toUpperCase()] !== undefined) {
            occurrences[char.toUpperCase()] += 1
        } else {
            occurrences[char.toUpperCase()] = 1
        }
    }
    return occurrences;
}

export default countOccurrences;