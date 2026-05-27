let username = "nouval";
let password = "1462300132";
function login(username, password) 
{
  if (!password) {
    return "Password salah";
  } else if (!username) {
    return "Username salah";
  } else {
    return "Login Berhasil";
  }
}

module.exports = {
  login,
};