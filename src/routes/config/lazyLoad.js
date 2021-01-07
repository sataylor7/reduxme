import NotFound from "../notFound.js";
/**
 * @description setting up the routes as an array to build the route components in the index file
 * DO NOT RENAME THIS VARIABLE - as `treasure-map feature <name>` looks for this variable name to inject
 * the newly generated feature
 */
const routes = [
  {
    name: "Unicorns",
    moduleName: {
      loader: () => import(/* webpackChunkName: "unicorns" */ "../unicorns.js"),
      loading: () => null,
      modules: ["unicorns"]
    },
    lazy:true,
    path:true,
    authenticate: false,
    route: "/unicorns"
  },
  {
    name: "Homepage",
    moduleName: {
      loader: () => import(/* webpackChunkName: "homepage" */ "../homepage"),
      loading: () => null,
      modules: ["homepage"]
    },
    lazy: true,
    path: true,
    authenticate: false,
    route: "/"
  },
  {
    name: "NotFound",
    moduleName: NotFound,
    lazy: false,
    path: false,
    authenticate: false
  }
];
export default routes;
