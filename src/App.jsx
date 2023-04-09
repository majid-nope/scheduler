import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Enroll from "./pages/Enroll";
import Schedule from "./pages/Schedule";

import Base from "./components/Layouts/Base";
import Header from "./components/Header/Header";
import logo from "./assets/zaio.svg";
import Home from "./pages/Home";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Base header={<Header logo={logo} />} />,
      children: [
        { path: "", element: <Home /> },
        { path: "/enroll", element: <Enroll /> },
        { path: "/schedule", element: <Schedule /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
