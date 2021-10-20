import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

import Login from "./components/Login/Login";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import AuthProvider from "./Context/AuthProvider";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ContactUS from "./components/ContactUS/ContactUS";
import Advantages from "./components/Advantages/Advantages";
import Providers from "./components/Providers/Providers";
import Capabilities from "./components/Capabilities/Capabilities";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AllCapabilities from "./components/AllCapabilities/AllCapabilities";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/allCapabilities">
              <AllCapabilities></AllCapabilities>
            </PrivateRoute>
            <PrivateRoute path="/capabilities/:serviceId">
              <Capabilities></Capabilities>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <ContactUS></ContactUS>
            </PrivateRoute>
            <Route path="/provider">
              <Providers></Providers>
            </Route>
            <Route path="/advantages">
              <Advantages></Advantages>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/resetPassword">
              <ResetPassword></ResetPassword>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
