var bcrypt = require("bcryptjs");
// todo: how are email and passowrd passed from "Login.js", not default func?
export function authenticate(email, password) {
  //   const emailHash = localStorage.getItem(email);
  //   const parsedHash = JSON.parse(emailHash)
  //   const hash = parsedHash.hash

  const hash = JSON.parse(localStorage.getItem(email)).hash;
  const isAuthenticated = bcrypt.compareSync(password, hash);
  // isAuthenticated 's value is a boolean, password === hash
  if  (isAuthenticated) {
    // This stores the users email and stays logged in. inside () = key: value
    localStorage.setItem('current_user', email)
  }
  // todo: does this send the value (true/false) to Login.js line 26?
  return isAuthenticated
}

export function createAccount(email, password) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  localStorage.setItem(email, JSON.stringify({ hash }));
  localStorage.setItem('current_user', email)
}
