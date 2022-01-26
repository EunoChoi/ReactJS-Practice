import Home from './routes/Home.js';
import Information from './routes/Information';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/information/:id'>
            <Information />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
      </Switch>
    </Router>
        
   );
}

export default App;
