const {
	shuffleBackRow,
	getWhiteRowArray,
	validateMove,
	isPseudoLegal,
	makeMove,
	unMakeMove,
	checkAfterMove,
	isSquareUnderAttack,
} = require("./chess960");

var WHITE = 0x0;
var BLACK = 0x8;

var PAWN = 0x01;
var KNIGHT = 0x02;
var KING = 0x03;
var BISHOP = 0x05;
var ROOK = 0x06;
var QUEEN = 0x07;

// White pieces have their 4th bit = 0
var WHITE_PAWN = 0x01;
var WHITE_KNIGHT = 0x02;
var WHITE_KING = 0x03;
var WHITE_BISHOP = 0x05;
var WHITE_ROOK = 0x06;
var WHITE_QUEEN = 0x07;

// Black pieces have their 4th bit = 1
var BLACK_PAWN = 0x09;
var BLACK_KNIGHT = 0x0a;
var BLACK_KING = 0x0b;
var BLACK_BISHOP = 0x0d;
var BLACK_ROOK = 0x0e;
var BLACK_QUEEN = 0x0f;

var board = [BLACK_ROOK, BLACK_KNIGHT, BLACK_BISHOP, BLACK_QUEEN, BLACK_KING, BLACK_BISHOP, BLACK_KNIGHT, BLACK_ROOK, 0, 0, 0, 0, 0, 0, 0, 0,
	BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, BLACK_PAWN, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, WHITE_PAWN, 0, 0, 0, 0, 0, 0, 0, 0,
	WHITE_ROOK, WHITE_KNIGHT, WHITE_BISHOP, WHITE_QUEEN, WHITE_KING, WHITE_BISHOP, WHITE_KNIGHT, WHITE_ROOK, 0, 0, 0, 0, 0, 0, 0, 0];

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

describe("isPseudoLegalTesting", () => {
	const from = 52; // Example square index
    const to = 36; // Example square index
    const currentPlayer = WHITE; // Example player
    const result = isPseudoLegal(from, to, currentPlayer, board);
    expect(result).toBe(true);
});

describe("makeMove", () => {
	// TODO: Write test cases for makeMove function
});

describe("unMakeMove", () => {
	// TODO: Write test cases for unMakeMove function
});

describe("checkAfterMove", () => {
	// TODO: Write test cases for checkAfterMove function
});

describe("isSquareUnderAttack", () => {
	// TODO: Write test cases for isSquareUnderAttack function
});
