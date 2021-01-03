import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';
import Alert from './components/layout/Alert';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <div className='App'>Online Ordering App</div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
