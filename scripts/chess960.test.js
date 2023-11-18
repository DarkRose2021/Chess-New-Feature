const {
	getWhiteRowArray,
	shuffleBackRow,
	generateChess960BackRows,
} = require("./chess960");

describe("getWhiteRowArray", () => {
	test("should return the correct white row array for a given configuration", () => {
		const randomConfig = [0, 1, 2, 3, 4, 5, 6, 7];
		const whiteRowIndices = [112, 113, 114, 115, 116, 117, 118, 119];
		const result = getWhiteRowArray(randomConfig, whiteRowIndices);
		const expected = whiteRowIndices;
		expect(result).toEqual(expected);
	});
});

describe("shuffleBackRow", () => {
	test("should return a board with shuffled back and white rows", () => {
		const oldBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
		const result = shuffleBackRow(oldBoard);

		// Assertion 1: Ensure the length of the result is the same as the input.
		expect(result.length).toBe(oldBoard.length);

		// Assertion 2: Check that the elements in the back row are rearranged based on the selected configuration.
		const backRowIndices = [0, 1, 2, 3, 4, 5, 6, 7];
		for (let i = 0; i < backRowIndices.length; i++) {
			expect(result[backRowIndices[i]]).toBe(oldBoard[chess960BackRows[0][i]]);
		}

		// Assertion 3: Verify that the elements in the white row are rearranged based on the configuration obtained from getWhiteRowArray.
		const whiteRowIndices = [8, 9, 10, 11, 12, 13, 14, 15];
		const shuffledWhiteRow = getWhiteRowArray(
			chess960BackRows[0],
			whiteRowIndices
		);
		for (let i = 0; i < whiteRowIndices.length; i++) {
			expect(result[whiteRowIndices[i]]).toBe(oldBoard[shuffledWhiteRow[i]]);
		}
	});
});
