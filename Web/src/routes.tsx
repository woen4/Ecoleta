import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
import CreatePoint from "../src/pages/CreatePoint";
import SuccessRegister from "./pages/SuccessRegister";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact></Route>
      <Route component={CreatePoint} path="/create-point" exact></Route>
      <Route component={SuccessRegister} path="/success-register" exact></Route>
    </BrowserRouter>
  );
};

export default Routes;
