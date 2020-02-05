import React from 'react';
import "typeface-roboto";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Kitchen from './view/pages/kitchen/kitchen';
import Lounge from './view/pages/lounge/lounge';
import { CssBaseline } from '@material-ui/core';


function App() {
  return (
    <div>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Lounge />
          </Route>
          <Route path="/kitchen">
            <Kitchen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


// function App() {
//   return (
//     <div>
//       <CssBaseline />
//       <Lounge />
//       <Kitchen />
//     </div>
//   );
// }


export default App;
