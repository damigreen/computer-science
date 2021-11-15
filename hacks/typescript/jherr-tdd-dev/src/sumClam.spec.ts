import "@types/jest"
import { sumClamp } from "./sumClamp";


describe("sumClamp", () => {
    it("should sum up tom zero", () => {
        expect(sumClamp([], 10)).toBe(0);
    });

    it("Should sum up to zero from some numbers", () => {
        expect(sumClamp([-1, 1], 10)).toBe(0);
    })
})
