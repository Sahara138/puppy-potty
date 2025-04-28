import { Route, RouterProvider } from "react-router";
import "./App.css";
import { createBrowserRouter, createRoutesFromElements } from "react-router";
import RootLayout from "./Layout/RootLayout";
import Home from "./pages/home";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
