import Home from './routes/Home.js';
import Detail from './routes/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/detail/:id'>
          <Detail />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>);
}

export default App;
