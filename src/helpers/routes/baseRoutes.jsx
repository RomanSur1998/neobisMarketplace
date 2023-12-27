import LoginPage from "../../pages/LoginPage/LoginPage";
import PasswordPage from "../../pages/PasswordPage/PasswordPage";
import RegistrationPage from "../../pages/RegistrPage/RegistrationPage";

export const BASE_ROTES_COLLECTION = [
  {
    link: "/",
    element: <LoginPage />,

    id: 1,
  },
  {
    link: "/registr",
    element: <RegistrationPage />,

    id: 2,
  },
  {
    link: "/pass",
    element: <PasswordPage />,
    id: 3,
  },
];
