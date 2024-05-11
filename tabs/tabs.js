import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import HomePage from '../screens/HomePage';
import ChartPage from '../screens/ChartPage';
import ProfilePage from '../screens/ProfilePage';
import ChatPage from '../screens/ChatPage';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getCartTotal} from '../store/cartSlice';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const dispatch = useDispatch();
  const {totalItems} = useSelector(state => state.cart);
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const navigate = useNavigation();

  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChartPress = () => {
    if (isAuthenticated) {
      navigate.navigate('Chart');
    } else {
      navigate.navigate('SignIn');
    }
  };

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarHideOnKeyboard: true,
      tabBarStyle: styles.tabBarStyle,
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomePage}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabIconContainer}>
            <FontAwesome5
              name="home"
              size={25}
              style={[styles.tabIcon, focused && styles.tabIconFocused]}
            />
            <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>Home</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chart"
      component={ChartPage}
      options={{
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity onPress={handleChartPress} style={styles.tabIconContainer}>
            <Feather
              name="shopping-cart"
              size={25}
              style={[styles.tabIcon, focused && styles.tabIconFocused]}
            />
            <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>Cart({totalItems})</Text>
          </TouchableOpacity>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatPage}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabIconContainer}>
            <Entypo
              name="chat"
              size={25}
              style={[styles.tabIcon, focused && styles.tabIconFocused]}
            />
            <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>Chat</Text>
          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfilePage}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabIconContainer}>
            <MaterialCommunityIcons
              name="account"
              size={27}
              style={[styles.tabIcon, focused && styles.tabIconFocused]}
            />
            <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>Profile</Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 51,
    backgroundColor: '#0e4183',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  tabIconContainer: {
    alignItems: 'center',
  },
  tabIcon: {
    width: 25,
    height: 25,
    color: '#748c94',
  },
  tabIconFocused: {
    color: 'white',
  },
  tabLabel: {
    color: '#748c94',
  },
  tabLabelFocused: {
    color: 'white',
  },
});

export default Tabs;
