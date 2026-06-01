const login = require("../src/login");

test("Email kosong", () => {
  expect(login("", "1234")).toBe("Username atau Password kosong");
});

test("Password kosong", () => {
  expect(login("nouvalfarouq@gmail.com", "")).toBe("Username atau Password kosong");
});

test("Format email salah", () => {
  expect(login("nouvalfarouq", "1234")).toBe("Format email tidak valid");
});

test("Login berhasil", () => {
  expect(login("nouvalfarouq@gmail.com", "1234")).toBe("Login berhasil");
});

test("Login gagal", () => {
  expect(login("user@gmail.com", "wrong")).toBe("Login gagal");
});