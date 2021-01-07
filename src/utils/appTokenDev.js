// DEPRECATED
import Cookies from "js-cookie";
import api from "../resource/app.resource";
/**
 *  THIS IS ONLY FOR LOCAL SETUP THIS WILL NOT BE EXPORTED
 */
export const setupAppTokenDev = async () => {
  const token = await api.facade.application.login({
    appId: process.env.REACT_APP_HMK_APP_ID,
    appKey: process.env.REACT_APP_HMK_APP_KEY
  });
  // store token in cookie - will probably encrypt this at some point
  Cookies.set("HMK-APP", JSON.stringify(token), {
    expires: new Date(token.expiration_date)
  });
};
