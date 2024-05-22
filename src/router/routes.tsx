import App from "../App";
import Login from "../pages/Login";

const routes = [
  {
    path: "/",
    element: <App />,
    handle: {
      async middleware({ request }, context) {
        context.parent = "PARENT MIDDLEWARE";
      },
    },
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
