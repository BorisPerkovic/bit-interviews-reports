import { Fragment } from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPage from "./Components/Pages/MainPage/MainPage";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/interviewreports" component={MainPage} />
        <Route path="/login" component={LoginForm} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
