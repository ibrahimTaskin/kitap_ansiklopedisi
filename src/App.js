import { Route,  Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import BookDetail from "./components/pages/BookDetail/BookDetail";
import CreateBook from "./components/pages/CreateBook";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} /> 
        <Route path="/book/:id" component={BookDetail } />
        <Route path="/signin" component={SignIn } />
        <Route path="/createBook" component={CreateBook} />
      </Switch>
    </div>
  );
}

export default App;
