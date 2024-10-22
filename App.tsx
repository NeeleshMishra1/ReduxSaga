
import React ,{useEffect, useRef, useState}from 'react';
import { View,Text, StyleSheet , TouchableOpacity, TextInput,} from 'react-native';
import Radio from './src/app/radio';
import Loader from './src/app/Loader';
import ModalP from './src/app/modal';
import Webview2 from './src/app/webView';
import { Apipage } from './src/app/api';
import { FlatListApipage } from './src/app/flatListApi';
import { Ref } from './src/app/ref';
import { Async } from './src/app/async';
import { ReduxUi } from './src/component/reduxUi';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { userList } from './src/component/userList';
import ThemeSwitcher from './src/component/changeTheme';


const Stack = createNativeStackNavigator();



function App() {
  
  return (
      // <Radio/>
        //  <Loader/>
  //  <ModalP/>
    //  <Webview2/>
    // <Apipage/>
    // <FlatListApipage/>
    // <Ref/>
    // <Async/>


    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  name="Home" component={ReduxUi} />
      <Stack.Screen name="userList" component={userList}/>
    </Stack.Navigator>
  </NavigationContainer>
    //  <ReduxUi/>
    // <ThemeSwitcher/>
  );
}



export default App;
