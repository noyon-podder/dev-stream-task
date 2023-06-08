import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Main from "./layout/Main";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <div className="max-w-[1440px] mx-auto">
    <RouterProvider router={router}></RouterProvider>
  </div>;
}

export default App;
