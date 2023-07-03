import countOccurrences from "./index"

test("basic tests", () => {
    expect(countOccurrences('Hello')).toEqual({
        'E': 1,
        'O': 1,
        'H': 1,
        'L': 2}
        );
} )