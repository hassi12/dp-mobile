import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import tabs from './tabs/tabs';
import HomePage from './screens/HomePage';
import ChartPage from './screens/ChartPage';
import ProfilePage from './screens/ProfilePage';
import ChatPage from './screens/ChatPage';
import DetailPage from './screens/DetailPage';
import ProductPage from './screens/productPage';
import CartPage from './screens/cartpage';
import CheckoutPage from './screens/CheckoutPage';
import AddressPage from './screens/AddressPage';
import Sucessfullorder from './screens/Sucessfullorder';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import OrderPage from './screens/OrderPage';
import AddressList from './screens/AddressList';
import OrderDetail from './screens/OrderDetail';
import {Provider} from 'react-redux';
import {store} from './store/store';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
let persistor = persistStore(store)

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Tabs">
            <Stack.Group>
              <Stack.Screen name="Tabs" component={tabs} />
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="Chart" component={ChartPage} />
              <Stack.Screen name="ProfilePage" component={ProfilePage} />
              <Stack.Screen name="chat" component={ChatPage} />
              <Stack.Screen name="DetailPage" component={DetailPage} />
              <Stack.Screen name="ProductPage" component={ProductPage} />
              <Stack.Screen name="CartPage" component={CartPage} />
              <Stack.Screen name="CheckoutPage" component={CheckoutPage} />
              <Stack.Screen name="AddressPage" component={AddressPage} />
              <Stack.Screen
                name="Sucessfullorder"
                component={Sucessfullorder}
              />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="OrderPage" component={OrderPage} />
              <Stack.Screen name="AddressList" component={AddressList} />
              <Stack.Screen name="OrderDetail" component={OrderDetail} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
