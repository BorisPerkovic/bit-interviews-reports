import { Fragment } from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import { Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainPage from "./Components/Pages/MainPage/MainPage";
import CandidateReports from "./Components/Pages/CandidateReports/CandidateReports";
import Reports from "./Components/Pages/Reports/Reports";
import CreateReport from "./Components/Pages/CreateReport/CreateReport";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/bit-interviews-reports" component={MainPage} />
        <Route path="/bit-interviews-reports/login" component={LoginForm} />
        <Route path="/bit-interviews-reports/single-candidate/:id" component={CandidateReports} />
        <Route exact path="/bit-interviews-reports/reports" component={Reports} />
        <Route path="/bit-interviews-reports/reports/create-report" component={CreateReport} />
      </Switch>
      <Footer />
    </Fragment>
  );
};

export default App;
