import 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import createStackNavigator, {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-fontawesome';
import SafeAreaView from 'react-native-safe-area-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useState} from 'react';

export default function HomePageSearch() {
  const {height, width} = Dimensions.get('window');

  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search here ..."
        clearButtonMode="always"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.searchInput}
      />

      <TouchableOpacity>
        <Feather name="search" size={25} color={'black'} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.whatsapp_style}>
        <Ionicons
          style={styles.searchfilter_icon}
          name="filter-outline"
          size={25}
          color={'white'}
          
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: wp(1),
    marginRight: wp(16),
  },
  searchInput: {
    flex: 1,
    paddingVertical: wp(2),
    
  },
  whatsapp_style: {
    alignItems: 'flex-end',
    position: 'absolute',
    width: wp(11.5),
    height: hp(6),
    backgroundColor: '#0e4183',
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'flex-end',
    marginLeft: wp(84),
  },

  searchfilter_icon: {
    marginRight: wp(2.5),
    marginBottom: wp(2.2),
    
  },
});
