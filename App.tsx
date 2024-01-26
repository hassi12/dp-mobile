import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import FavouritePage from './screens/FavouritePage';
import APITesting from './screens/APITesting';
import UserAdressPage from './screens/UserAdressPage';
import UserAddAddressPage from './screens/UserAddAddressPage';
import CommentPage from './screens/CommentPage';
// import {Provider} from 'react-redux';
// import {store} from './store/store';
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import {useSelector} from 'react-redux';
// let persistor = persistStore(store)

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  // const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <Provider store={store}>
    //   <PersistGate persistor={persistor} >
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
          <Stack.Screen name="CheckoutPage" component={CheckoutPage} />
          <Stack.Screen name="AddressPage" component={AddressPage} />
          <Stack.Screen name="FavouritePage" component={FavouritePage} />
          <Stack.Screen name="APITesting" component={APITesting} />
          <Stack.Screen name="Sucessfullorder" component={Sucessfullorder} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="OrderPage" component={OrderPage} />
          <Stack.Screen name="AddressList" component={AddressList} />
          <Stack.Screen name="OrderDetail" component={OrderDetail} />
          <Stack.Screen name="UserAdressPage" component={UserAdressPage} />
          <Stack.Screen
            name="UserAddAddressPage"
            component={UserAddAddressPage}
          />
          <Stack.Screen name="CommentPage" component={CommentPage} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
    //   </PersistGate>
    // </Provider>
  );
};

export default App;
