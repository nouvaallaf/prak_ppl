function login(email, password) {
  if (!email || !password) {
    return "Username atau Password kosong";
  }

  const pattern_mail =
    /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/;

  if (!pattern_mail.test(email)) {
    return "Format email tidak valid";
  }

  if (email === "nouvalfarouq@gmail.com" && password === "1234") {
    return "Login berhasil";
  }

  return "Login gagal";
}

module.exports = login;