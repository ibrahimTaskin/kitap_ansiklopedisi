import { Route,  Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import { About } from "./components/pages/About";
import BookDetail from "./components/pages/BookDetail/BookDetail";
import CreateBook from "./components/pages/CreateBook";
import ReactGA from 'react-ga';

const TRACKING_ID = process.env.GOOGLE_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} /> 
        <Route path="/book/:id" component={BookDetail } />
        <Route path="/signin" component={SignIn } />
        <Route path="/about" component={About} />
        <Route path="/createBook" component={CreateBook} />
      </Switch>
    </div>
  );
}

export default App;
