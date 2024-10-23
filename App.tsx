
import React from 'react';
import { View, } from 'react-native';
import { Main } from './src/screens/main';
import { Product } from './src/screens/myProduct';
import { Provider } from 'react-redux';
import { mystore } from './src/reduxToolKit/store';

function App() {

  return (
    <Provider store={mystore}>
    <Main />
    </Provider>
  );
}



export default App;
