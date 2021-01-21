import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';
import './App.css';

// Components
import OrderPageHome from './components/presentaional/OrderPageHome/OrderPageHome';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div>
            <OrderPageHome />
          </div>
          <div className='main'></div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
