const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    areWeCovered,
    createMatrix

} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("returns sum of numbers divisible by 3 or 5", () => {
        expect(sumMultiples([3])).toBe(3);
        expect(sumMultiples([5])).toBe(5);
        expect(sumMultiples([3, 5])).toBe(8);
        expect(sumMultiples([3, 5])).toBe(8);
        expect(sumMultiples([3, 5, 10, -20, -3])).toBe(-5);
        expect(sumMultiples([0])).toBe(0);

    });


});


describe("isValidDNA", () => {
    test("returns true or false depending if the string is valid DNA or not", () => {
        expect(isValidDNA("ABCD")).toBe(false);
        expect(isValidDNA("CAGT")).toBe(true);
        expect(isValidDNA("CD")).toBe(false);

    });


    describe("isValidDNA", () => {
        test("not case sensitive", () => {
            expect(isValidDNA("aaccgGtT")).toBe(true);
        });
    });

});
describe("getComplementaryDNA", () => {
    test("returns Complementary DNA irrespective of case", () => {
        expect(getComplementaryDNA("ATGC")).toBe("TACG");
        expect(getComplementaryDNA("ATgC")).toBe("TACG");
    });


    test("returns error message if incorrect DNA ", () => {
        expect(getComplementaryDNA("ATGCB")).toBe("Invalid DNA!!");
    });

});

describe("isItPrime", () => {
    test("returns Complementary DNA irrespective of case", () => {
        expect(isItPrime(21)).toBe(false);
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(2701988)).toBe(false);
        expect(isItPrime(2701987)).toBe(true);
    });
});




describe("areWeCovered", () => {
    test("returns true when there are exactly  3 staff for rota ", () => {
        const staff = [
            {
                name: "Sally",
                rota: ["Monday", "Tuesday", "Friday"]
            },
            {
                name: "Hally",
                rota: ["Tuesday", "Monday", "Friday"]
            },
            {
                name: "Molly",
                rota: ["Sunday", "Tuesday", "Monday"]
            }
        ];

        expect(areWeCovered(staff, "Monday")).toBe(true);
    });


    test("returns true when there are more than 3 staff for rota", () => {
        const staff = [
            {
                name: "Sally",
                rota: ["Monday", "Tuesday", "Friday"]
            },
            {
                name: "Hally",
                rota: ["Tuesday", "Monday", "Friday"]
            },
            {
                name: "Molly",
                rota: ["Sunday", "Tuesday", "Monday"]
            },
            {
                name: "Jolly",
                rota: ["Thursday", "Tuesday", "Monday"]
            }
        ];

        expect(areWeCovered(staff, "Monday")).toBe(true);
    });


    test("returns false when there are less than  3 staff for rota", () => {
        const staff = [
            {
                name: "Sally",
                rota: ["Monday", "Tuesday", "Friday"]
            },
            {
                name: "Hally",
                rota: ["Tuesday", "Monday", "Friday"]
            },
            {
                name: "Molly",
                rota: ["Thursday", "Tuesday", "Monday"]
            },
            {
                name: "Jolly",
                rota: ["Thursday", "Tuesday", "Monday"]
            }
        ];

        expect(areWeCovered(staff, "Friday")).toBe(false);
    });
});




describe("createMatrix", () => {

    test("returns matrix 1x1 matrix ", () => {
        expect(createMatrix(1, "One")).toEqual([
            ["One"]
        ]);
    });

    test("returns matrix 3X3 matrix ", () => {
        expect(createMatrix(3, "foo")).toEqual([
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"],
            ["foo", "foo", "foo"]


        ]);
    });
});
