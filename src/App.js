import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/create';
import ListEmployee from './pages/list_employees';
import Error from './composants/error';
// import DataProvider from './constants/context';

/**
 * App is function router
 * @returns {React.ReactElement}
 */
function App() {
    return (
        <Router>
            <div id="wrapper_main">
                <div id="wrapper_body">
                    <Switch>
                        <Route exact path="/employees">
                            <ListEmployee />
                        </Route>

                        <Route exact path="/">
                            <Create />
                        </Route>
                        <Route path="*">
                            <Error />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
