import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import MainPage from "../../pages/MainPage/MainPage";
import OwnProducts from "../../pages/OwnProducts/OwnProducts";
import ProfilePage from "../../pages/ProfilePage/ProfilePage";

export const PRIVATE_ROUT_COLLECTION = [
  {
    link: "/profile",
    element: <ProfilePage />,
    id: 4,
  },
  {
    link: "/favorites",
    element: <FavoritesPage />,
    id: 5,
  },
  {
    link: "/own",
    element: <OwnProducts />,
    id: 6,
  },
  {
    link: "/main",
    element: <MainPage />,
    id: 7,
  },
];
