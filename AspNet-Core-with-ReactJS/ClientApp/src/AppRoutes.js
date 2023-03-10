
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
      path: '/fetch-data',
      element: <FetchData />
    },
    {
        Path: '/login',
        element: <login />
    }
];

export default AppRoutes;
