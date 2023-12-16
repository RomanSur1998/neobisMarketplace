export function getUsername(values) {
  const user = JSON.parse(localStorage.getItem("username"));
  let newUser = { ...user, password: values.password };
  return newUser;
}
