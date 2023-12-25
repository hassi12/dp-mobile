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
          width: wp(98),
          height: 50,
          backgroundColor: 'white',
          borderRadius: 4,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
          margin: 5,
        }}>
        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign
            name="left"
            style={{fontSize: 25, color: 'black'}}
            onPress={() => navigate.navigate(CheckoutPage)}
          />
          <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 70}}>
            Select Delivery Address
          </Text>
          <Text
            style={{marginLeft: 100, fontWeight: 'bold', color: 'red'}}
            onPress={() => navigate.navigate(AddressPage)}>
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.card}>
        <View style={{position: 'absolute', top: 5, right: 5}}>
          <CheckBox
            isChecked={isChecked}
            onClick={handleCheckboxToggle}
            style={{justifyContent: 'flex-end'}} // Align the checkbox to the right
            checkBoxColor="red"
            checkedCheckBoxColor="red"
          />
        </View>
        <View style={{flex: 3, marginTop: 20}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              width: wp(60),
              margin: 5,
              color: 'black',
              marginLeft: 20,
            }}>
            Atif badini
          </Text>
          <Text
            style={{
              fontSize: 15,
              width: wp(60),
              margin: 5,
              marginLeft: 20,
            }}>
            Atif Badini, lake city Lahore near zargoon city, quetta nushki,
            balochistan{' '}
          </Text>
        </View>
      </View>

      <View style={style.card}>
        <View style={{position: 'absolute', top: 5, right: 5}}>
          <CheckBox
            isChecked={isChecked}
            onClick={handleCheckboxToggle}
            style={{justifyContent: 'flex-end'}} // Align the checkbox to the right
            checkBoxColor="red"
            checkedCheckBoxColor="red"
          />
        </View>
        <View style={{flex: 3, marginTop: 20}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              width: wp(60),
              margin: 5,
              color: 'black',
              marginLeft: 20,
            }}>
            Atif badini
          </Text>
          <Text
            style={{
              fontSize: 15,
              width: wp(60),
              margin: 5,
              marginLeft: 20,
            }}>
            Atif Badini, lake city Lahore near zargoon city, quetta nushki,
            balochistan{' '}
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
    backgroundColor: 'white',
  },
  card: {
    width: 350,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
