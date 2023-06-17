import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: t ,
  token: "",
  loginHandler: (token) => {},
  logoutHandler: () => {},
});

export default AuthContext;
