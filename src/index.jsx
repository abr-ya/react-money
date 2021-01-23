import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import rootReducer from './reducers/rootReducer';
import App from './containers/appContainer';
import CustomSnackbar from './containers/customSnackbarContainer';
import theme from './themes/theme';

const composeEnhancers = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware()), // здесь middlewares, м.б. массив
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
      <CustomSnackbar />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);
