export function setUsername(value   ) {
  if (!localStorage.getItem("username")) {
    localStorage.setItem("username", JSON.stringify({}));
  }
  localStorage.setItem("username", JSON.stringify(value));
}
