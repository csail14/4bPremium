import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home/home";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./screens/Contact/contact";
import Register from "./screens/Register/Register";
import Login from "./screens/Register/Login";
import Logout from "./screens/Register/logout";
import CGU from "./screens/cgu";
import Forgot from "./screens/Register/ForgotPassword";
import AskNewPassword from "./screens/Register/AskNewPassword";
import Validate from "./screens/Register/ValidateAccount";
import NonAuth from "./screens/Admin/NonAuth";
import Warroom from "./screens/Warroom/Warroom";
import RequireAuth from "./helpers/require-auth";
import Account from "./screens/Account/Account";
import ChangeAccount from "./screens/Account/ChangeAccount";
import Pack from "./screens/Pack/pack";
import Admin from "./screens/Admin/Admin";
import { CloudinaryContext } from "cloudinary-react";

function App() {
  return (
    <CloudinaryContext cloudName="dmpzubglr">
      <div className="App">
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/cgu" component={CGU} />
            <Route exact path="/changePassword/:key_id" component={Forgot} />
            <Route exact path="/forgot" component={AskNewPassword} />
            <Route exact path="/pack" component={Pack} />
            <Route exact path="/validate/:key_id" component={Validate} />
            <Route exact path="/non-authorize" component={NonAuth} />
            <Route
              exact
              path="/warroom"
              component={RequireAuth(Warroom, true)}
            />
            <Route
              exact
              path="/account"
              component={RequireAuth(Account, true)}
            />
            <Route
              exact
              path="/admin"
              component={RequireAuth(Admin, true, true)}
            />
            <Route
              exact
              path="/change-account"
              component={RequireAuth(ChangeAccount, true)}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </CloudinaryContext>
  );
}

export default App;
