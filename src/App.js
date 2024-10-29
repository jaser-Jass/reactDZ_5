import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ThemeToggler from './components/ThemeToggler';

const App = () => {
  return (
      <Provider store={store}>
          <div>
              <ThemeToggler />
          </div>
      </Provider>
  );
};

export default App;
