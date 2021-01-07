import { API } from "hmk/packages/hmk-utils/lib/hmk-utils";
/**
 * this is setup for ecards facade, current products(verticals) available are ecards|svod|admin
 * if we want to use it for a new product we will need to create the services in the hmk repo
 * - (services) these are the requests for the facade
 */
const facade = new API(["members"], {
  product: "<%= FACADE_TYPE %>",
  env:
    process.env.NODE_ENV === "test" ? "dev" : process.env.REACT_APP_FACADE_ENV,
  request: {
    headers: {
      "X-Device-ID": "web"
    }
  }
});

window.api = facade;
const api = { facade };

export default api;
