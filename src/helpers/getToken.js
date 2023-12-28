export function getToken(dispatch, setToken) {
  if (!localStorage.getItem("tokens")) {
    localStorage.setItem("tokens", "null");
  } else {
    let data = JSON.parse(localStorage.getItem("tokens"));
    dispatch(setToken(data));
  }
}
