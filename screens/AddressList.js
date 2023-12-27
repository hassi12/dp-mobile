import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CheckoutPage from './CheckoutPage';
import AddressPage from './AddressPage';
import CheckBox from 'react-native-check-box';

const AddressList = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigation();

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
            onPress={() => navigate.navigate(CheckoutPage)}
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
          onPress={() => navigate.navigate(AddressPage)}>
          Add
        </Text>
      </View>

      <View style={style.card}>
        <View style={{position: 'absolute', top: 20, right: 10}}>
          <Text>Edit</Text>
        </View>
        <View style={{position: 'absolute', top: 60, right: 10}}>
          <CheckBox
            isChecked={isChecked}
            onClick={handleCheckboxToggle}
            style={style.checkboxstyle}
            checkBoxColor="red"
            checkedCheckBoxColor="red"
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              width: wp(60),
              margin: 5,
              color: 'black',
              marginLeft: 10,
            }}>
            Atif badini
          </Text>
          <Text
            style={{
              fontSize: 15,
              width: wp(75),
              margin: 5,
              marginLeft: 10,
            }}>
            Atif Badini, lake city Lahore near zargoon city, quetta nushki,
            balochistan{' '}
          </Text>
          <Text
            style={{
              fontSize: 15,
              width: wp(75),
              margin: 5,
              marginLeft: 10,
            }}>
            (+92)03337861942
          </Text>
        </View>
      </View>

      <View style={style.card}>
        <View style={{position: 'absolute', top: 20, right: 10}}>
          <Text>Edit</Text>
        </View>
        <View style={{position: 'absolute', top: 60, right: 10}}>
          <CheckBox
            isChecked={isChecked}
            onClick={handleCheckboxToggle}
            style={{justifyContent: 'flex-end'}} // Align the checkbox to the right
            checkBoxColor="red"
            checkedCheckBoxColor="red"
          />
        </View>

        <View style={{marginTop: 10}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              width: wp(60),
              margin: 5,
              color: 'black',
              marginLeft: 10,
            }}>
            Atif badini
          </Text>
          <Text
            style={{
              fontSize: 15,
              width: wp(75),
              margin: 5,
              marginLeft: 10,
            }}>
            Atif Badini, lake city Lahore near zargoon city, quetta nushki,
            balochistan{' '}
          </Text>
          <Text
            style={{
              fontSize: 15,
              width: wp(75),
              margin: 5,
              marginLeft: 10,
            }}>
            (+92)03337861942
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddressList;

const style = StyleSheet.create({
  container1: {
    flex: 1,
  },
  card: {
    width: wp(94),
    height: 150,
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
