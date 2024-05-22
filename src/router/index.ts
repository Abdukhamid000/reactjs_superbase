import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token; // Convert to boolean for consistency
};

const router = createBrowserRouter(routes, { unstable_dataStrategy ()});

export default router;
