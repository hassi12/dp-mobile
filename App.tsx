import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
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


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Tabs">
        <Stack.Group>
        <Stack.Screen name="Tabs" component={tabs} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Chart" component={ChartPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="chat" component={ChatPage} />
        <Stack.Screen name="DetailPage" component={DetailPage}/>
        <Stack.Screen name="ProductPage" component={ProductPage}/>
        <Stack.Screen name="CartPage" component={CartPage} />
        <Stack.Screen name="CheckoutPage" component={CheckoutPage} />
        <Stack.Screen name="AddressPage" component={AddressPage} />
        <Stack.Screen name="Sucessfullorder" component={Sucessfullorder} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
