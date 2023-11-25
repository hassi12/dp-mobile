import 'react-native-gesture-handler';
import React from 'react';
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

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: false,
        headerShown: false,
        position: 'absolute',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 55,
          backgroundColor: '#0e4183',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        },

        tabBarLabel: () => null,
      }}>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <FontAwesome5
                name="home"
                size={25}
                resizeMode="contain"
                style={styles.image_css}
              />
              <Text style={{color: focused ? 'white' : '#748c94'}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={ChartPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Feather
                name="shopping-cart"
                size={25}
                style={styles.image_css}
                resizeMode="contain"
              />
              <Text style={{color: focused ? 'white' : '#748c94'}}>Chart</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatPage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Entypo
                name="chat"
                size={25}
                style={styles.image_css}
                resizeMode="contain"
              />
              <Text style={{color: focused ? 'white' : '#748c94'}}>Chat</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <MaterialCommunityIcons
                name="account"
                size={27}
                resizeMode="contain"
                style={styles.account_css}
              />
              <Text style={{color: focused ? 'white' : '#748c94'}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab_navigator: {
    position: 'absolute',
    bottom: 40,
    left: 60,
    right: 20,
    elevation: 40,
    borderRadius: 15,
    height: 70,
  },
  image_css: {
    width: 25,
    height: 25,
    marginLeft: 2,
    color: 'white',
  },
  account_css: {
    width: 25,
    height: 25,
    justifyContent: 'flex-end',
    marginLeft: 5,
    color: 'white',
  },
});

export default Tabs;
