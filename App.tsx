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
        
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
