const {
  tambah,
  kurang,
  kali,
  bagi,
} = require("../src/kalkulator.js");

describe("Kalkulator", () => {
  test("Tambah", () => {
    expect(tambah(10, 5)).toBe(15);
  }),
  test("Kurang", () => {
    expect(kurang(10, 5)).toBe(5);
  }),
  test("Kali", () => {
    expect(kali(10, 5)).toBe(50);
  }),
  test("Bagi", () => {
    expect(bagi(10, 5)).toBe(2);
  }),


  
  0
  
});