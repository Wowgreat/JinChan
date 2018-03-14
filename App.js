import React from "react";
import { StackNavigator } from "react-navigation";
import { Root } from "native-base";
import { createStore } from 'redux';
import {Provider} from 'react-redux';


import HomeScreen from './HomePage';
import FinancialScreen from './js/financial/index';
import LoginScreen from './js/my/login';
import VerifyScreen from './js/my/verified';
import MyRecordingScreen from './js/my/MyRecording';


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Financial:{screen:FinancialScreen},
  Login:{screen:LoginScreen},
  Verify:{screen:VerifyScreen},
  MyRecording:{screen:MyRecordingScreen}
},
{
  initialRouteName: "Home",
}
);

import rootReducer from './js/reducers'

const store = createStore(rootReducer);
export default () =>
   <Root>
     <Provider store={store}>
       <App />
     </Provider>
   </Root>;
