import routeURLs from "../routes/routes";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const routeLinks = [
  { path: routeURLs.home, component: Home, layout: MainLayout },
];

export default routeLinks;
