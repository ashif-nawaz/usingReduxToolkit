import React from "react";
import Layout from "./components/Layout/Layout";
import { CssBaseline } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import LoginPage from "./pages/Login";




const App = (props) => {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Switch>
            <Route path="/" exact >
              <Home />
            </Route>
            <Route path="/login" exact >
              <LoginPage />
            </Route>
            <Route path="/shop" exact>
              <Shop />
            </Route>
            <Route path="/product/:productId" exact>
               <ProductDetails />
            </Route>
            <Route path="/cart" exact>
              <Cart />
            </Route>
        </Switch>
      </Layout>
    </>
  );
};

export default App;
