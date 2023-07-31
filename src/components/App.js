import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Random from './Greeting';
import store from '../redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<Random />} />
        {/* Add more routes for other components */}
      </Routes>
    </Router>
  </Provider>
);

export default App;
