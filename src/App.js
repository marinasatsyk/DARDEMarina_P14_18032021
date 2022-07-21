import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/create';
import ListEmployee from './pages/list_employees';
import Error from './composants/error';
import DataProvider from './constants/context';

/**
 * App is function router
 * @returns {React.ReactElement}
 */
function App() {
    return (
        <DataProvider>
            <Router>
                <div id="wrapper_main">
                    <div id="wrapper_body">
                        <Switch>
                            <Route path="/employees">
                                <ListEmployee />
                            </Route>

                            <Route path="/">
                                <Create />
                            </Route>

                            <Route path="*">
                                <Error />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;
