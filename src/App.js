import React from 'react';
import './index.scss';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import Navigation from './components/Navigation/Navigation';

// Screens
import ResultScreen from './screens/ResultScreen';
import DetailScreen from './screens/DetailScreen';

const App = () => {
    return (
        <div className="container">
            <Router>
                <Navigation />
                <Route exact path='/foodyrestaurants-react' component={ResultScreen} />
                <Route exact path='/foodyrestaurants-react/:fid' component={DetailScreen} />
            </Router>
        </div>
    )
}

export default App;
