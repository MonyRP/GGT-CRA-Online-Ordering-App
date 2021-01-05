import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';
import './App.css';

// Components
import Alert from './components/layout/Alert';
import OrderPageHome from './components/presentaional/OrderPageHome/OrderPageHome';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Alert />
          <header>
            <OrderPageHome />
          </header>
          <div className='main'>
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            Text at bottom */}
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
