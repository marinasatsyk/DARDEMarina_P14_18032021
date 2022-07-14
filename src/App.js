import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
    Navigate,
} from 'react-router-dom';
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
                        <Routes>
                            <Route path="/" element={<Create />} />
                            <Route
                                path="/eployees"
                                element={<ListEmployee />}
                            />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </DataProvider>
    );
}

export default App;
