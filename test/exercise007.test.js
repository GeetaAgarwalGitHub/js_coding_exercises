
const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("returns sum of numbers divisible by 3 or 5", () => {
        expect(sumDigits(3)).toBe(3);
        expect(sumDigits(1234)).toBe(10);
        expect(sumDigits(12340)).toBe(10);
    });


});

describe("createRange", () => {
    test("creates an array with start and end adding the step counter ", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(-10, 10, 2)).toEqual([-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10]);
    });
});


describe("getScreentimeAlertList", () => {
    test("returns usernames who have used over 100 minutes on any given date ", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    });

});


describe("getScreentimeAlertList", () => {
    test("returns  no users if date does not exist ", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, "2022-05-04")).toEqual([]);
    });

});


describe("getScreentimeAlertList", () => {
    test("returns  no users if no user has used over 100 minutes  ", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 6, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, "2022-05-04")).toEqual([]);
    });

});

describe("getScreentimeAlertList", () => {
    test("returns multiple usernames who have used over 100 minutes on any given date ", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    { date: "2019-06-14", usage: { twitter: 60, instagram: 50, facebook: 0 } },

                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 60, whatsApp: 50, facebook: 0, safari: 31 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, "2019-06-14")).toEqual(["beth_1234", "sam_j_1989"]);
    });

});

describe("hexToRGB", () => {
    test("Returns RGB colour code for hexadecimal input", () => {
        expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
        expect(hexToRGB("#557d60")).toBe("rgb(85,125,96)");
        expect(hexToRGB("#170304")).toBe("rgb(23,3,4)");
    });


});



describe("findWinner", () => {
    test("returns X as winner", () => {
        const arr = [

            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ];
        expect(findWinner(arr)).toBe("X");
    });
});



describe("findWinner", () => {
    test("returns 0 as winner", () => {
        const arr = [

            ["0", "X", null],
            ["0", null, "X"],
            ["0", null, "X"]
        ];
        expect(findWinner(arr)).toBe("0");
    });
});


describe("findWinner", () => {
    test("There is no winner", () => {
        const arr = [

            ["0", "X", null],
            ["X", null, "0"],
            ["0", null, "X"]
        ]
        expect(findWinner(arr)).toBe('');
    });
});


describe("findWinner", () => {
    test("Both 0 and X are winners, there is a draw!!", () => {
        const arr = [

            ["0", "X", null],
            ["0", "X", null],
            ["0", "X", null]
        ]
        expect(findWinner(arr)).toBe("0X");
    });
});
