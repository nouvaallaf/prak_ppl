const {
  konversiNilai,
} = require("../src/nilai.js");

describe("Konversi Nilai", () => {

  test("Nilai 90", () => {
    expect(konversiNilai(90)).toBe("A");
  }),

  test("Nilai 70", () => {
    expect(konversiNilai(70)).toBe("B");
  }),

  test("Nilai 65", () => {
    expect(konversiNilai(65)).toBe("C");
  }),

  test("Nilai 50", () => {
    expect(konversiNilai(50)).toBe("D");
  }),

  test("Nilai -1", () => {
    expect(konversiNilai(-1)).toBe("Tidak Valid");
  }),

  test("Nilai 120", () => {
    expect(konversiNilai(120)).toBe("Tidak Valid");
  }),







  
  0
  
});