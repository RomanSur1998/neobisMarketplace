import { toast } from "react-toastify";
export const toaster = {
  setUserDataToast: () => {
    toast.success("Данные успешно обновлены", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  },
  toastAddProduct: () => {
    toast.success("Товар добавлен", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  },
  uncorrectUser: () =>
    toast.error("Неверный логин или пароль", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }),
  checkUser: () =>
    toast.error("Данный пользователь уже зарегистрирован", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    }),
};
