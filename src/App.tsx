import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./configs/routes/app.routes";

function App() {
  return <RouterProvider router={createBrowserRouter(AppRoutes)} />;
}

export default App;
