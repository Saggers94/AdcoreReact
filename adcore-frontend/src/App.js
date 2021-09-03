import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";
import DataCollectionComponent from "./components/DataCollectionComponent";
import DetailDataComponent from "./components/DetailDataComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route exact path="/spacecrafts">
            <DataCollectionComponent />
          </Route>
          <Route exact path="/spacecrafts/:id">
            <DetailDataComponent />
          </Route>
          <Route exact path="/about">
            <AboutComponent />
          </Route>
          <Route exact path="/contact">
            <ContactComponent />
          </Route>
          {/* <Route exact path="/login">
            <LoginComponent />
          </Route>
          <Route exact path="/register">
            <RegisterComponent />
          </Route> */}
        </Switch>
      </Router>

      <FooterComponent />
    </div>
  );
}

export default App;
