import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import TopBar from "./components/topbar/TopBar";
import Footer from "./components/footer/Footer";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Categories from "./pages/categories/Categories";

import {Context} from "./context/Context";
import {useContext} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const {user} = useContext(Context)
  const admin = true;


  return (
    <Router>
      <TopBar/>
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/register">{user ? <Home/> : <Register/>}</Route>
      <Route path="/login">{user ? <Home/> : <Login/>}</Route>
      <Route path="/settings">{user ? <Settings/> : <Register/>}</Route>
      <Route path="/write">{user ? <Write/> : <Home/>}</Route>
      <Route path="/post/:postId"><Single /></Route>
      <Route path="/about"><About/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
