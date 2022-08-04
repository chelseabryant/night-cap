var bcrypt = require("bcryptjs");
export function authenticate(email, password) {
  //   const emailHash = localStorage.getItem(email);
  //   const parsedHash = JSON.parse(emailHash)
  //   const hash = parsedHash.hash

  const hash = JSON.parse(localStorage.getItem(email)).hash;
  const isAuthenticated = bcrypt.compareSync(password, hash);
  if  (isAuthenticated) {
    localStorage.setItem('current_user', email)
  }
  return isAuthenticated
}

export function createAccount(email, password) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  localStorage.setItem(email, JSON.stringify({ hash }));
  localStorage.setItem('current_user', email)
}
