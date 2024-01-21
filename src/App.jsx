import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";

const rout = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage/>} />
    </>
  )
);

function App() {
  return <RouterProvider router={rout} />;
}

export default App;
