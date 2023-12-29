export function deleteToken(navigate) {
  localStorage.removeItem("tokens");
  navigate("/login");
}
