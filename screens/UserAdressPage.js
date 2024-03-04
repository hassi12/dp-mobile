import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CheckoutPage from './CheckoutPage';
import AddressPage from './AddressPage';
import CheckBox from 'react-native-check-box';
import UserAddAddressPage from './UserAddAddressPage';
import {useSelector} from 'react-redux';
import {UserDetail} from '../services/User_services';
import {add} from '../store/cartSlice';
import Tabs from '../tabs/tabs';

const UserAdressPage = () => {
  const [address, setAddress] = useState([]);

  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigation();

  const User = useSelector(state => state.user);
  const UserId = User.user.id;

  const usertoken = useSelector(state => state.user.token);
  let headers = {};
  if (usertoken) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${usertoken}`,
    };
  }

  useEffect(() => {
    HandleUsers();
    console.log(usertoken);
  }, []);

  const HandleUsers = async () => {
    try {
      let data = await UserDetail(UserId, headers);
      setAddress(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={style.container1}>
      <View
        style={{
          width: wp(100),
          height: 45,
          backgroundColor: 'white',
          borderRadius: 4,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
          borderBottomWidth: 0.2,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{}}>
          <AntDesign
            name="left"
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={() => navigate.navigate('Tabs')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 60,
            marginTop: 10,
          }}>
          Select Delivery Address
        </Text>
        <Text
          style={{
            marginLeft: 100,
            fontWeight: 'bold',
            color: 'red',
            marginTop: 10,
          }}
          onPress={() => navigate.navigate(UserAddAddressPage)}>
          Add 
        </Text>
      </View>

      <FlatList
        data={address.addresses}
        renderItem={({item}) => (
          <View style={style.card}>
            <View style={{position: 'absolute', top: 20, right: 10}}>
              <Text>Edit</Text>
            </View>
            <View style={{position: 'absolute', top: 60, right: 10}}>
              <CheckBox
                isChecked={isChecked}
                onClick={handleCheckboxToggle}
                style={{justifyContent: 'flex-end'}}
                checkBoxColor="red"
                checkedCheckBoxColor="red"
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 8,
                  color: 'black',
                  fontWeight: 'bold',
                  width: wp(70),
                }}>
                {address?.first_name} {address?.last_name}
              </Text>
              <Text style={{marginLeft: 6, width: wp(85), color: 'black'}}>
                {' '}
                {item?.address}{' '}
              </Text>
              <Text
                style={{
                  marginLeft: 8,
                  width: wp(85),
                  color: 'black',
                  // marginTop: 0,
                }}>
                {item?.email_address}
              </Text>
              <Text
                style={{
                  marginLeft: 8,
                  width: wp(85),
                  color: 'black',
                  marginTop: 5,
                }}>
                {' '}
                (+92) {item?.phone_number}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default UserAdressPage;

const style = StyleSheet.create({
  container1: {
    flex: 1,
  },
  card: {
    width: wp(94),
    height: heightPercentageToDP(15),
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    margin: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxstyle: {},
  borderRadius: 50,
});
