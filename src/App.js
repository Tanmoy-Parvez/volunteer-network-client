import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Events from './components/Events/Events';
import Admin from './components/Admin/Admin';
import AddActivity from './components/AddActivity/AddActivity';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/addForm">
            <AddActivity />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registerForm">
            <RegisterForm />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
