import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {rotationHandlerName} from 'react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler';
import Tabs from '../tabs/tabs';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';
import CartPage from './cartpage';
import AddressPage from './AddressPage';
import Sucessfullorder from './Sucessfullorder';

const CheckoutPage = () => {
  const navigate = useNavigation();

  return (
    <View style={style.base}>
      <SafeAreaView>
        <View style={{flexDirection: 'row', marginBottom: 10}}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 40,
            }}>
            <AntDesign
              name="left"
              size={25}
              onPress={() => navigate.navigate(CartPage)}
            />
          </TouchableOpacity>
          <View style={{marginTop: 5}}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                color: '#00599d',
                fontSize: 30,
                marginLeft: 40,
              }}>
              CheckOut{' '}
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <View style={style.cart1}>
        <View
          style={{
            height: 130,
            width: 100,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            backgroundColor: '#e9eef7',
          }}>
          <Image
            source={require('../assets/petfood32.png')}
            style={style.itemimage}
          />
        </View>
        <View>
          <Text
            style={{
              marginTop: 5,
              color: 'black',
              marginLeft: 20,
              fontSize: 30,
            }}>
            Pre Degree
          </Text>

          <View style={style.itemcontainer}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 25,
                fontWeight: '900',
                color: 'black',
              }}>
              RS.4500
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 20,
                fontWeight: '900',
                color: 'black',
              }}>
              Quantity 3
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{marginLeft: 20, marginTop: 10, color: 'blue'}}
              onPress={() => navigate.navigate(CartPage)}>
              Edit <AntDesign name="right"></AntDesign>{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.cart1}>
        <View>
          <Text
            style={{
              marginTop: 5,
              color: 'black',
              marginLeft: 20,
              fontSize: 20,
            }}>
            1. Shipping Information
          </Text>

          <View style={style.container}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 15,
                fontWeight: '900',
                width: wp(85),
              }}>
              Atif Badini , lake city Lahore near zargoon city, quetta nushki ,
              balochistan{' '}
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{marginLeft: 20, marginTop: 10, color: 'blue'}}
              onPress={() => navigate.navigate(AddressPage)}>
              Edit <AntDesign name="right"></AntDesign>{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.cart1}>
        <View>
          <Text
            style={{
              marginTop: 5,
              color: 'black',
              marginLeft: 20,
              fontSize: 20,
            }}>
            2. Payment Method
          </Text>

          <View style={style.container}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 15,
                fontWeight: '900',
                width: wp(85),
              }}>
              Cash on Delevery
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          height: 200,
          width: wp(100),
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          backgroundColor: '#ffffff',
          borderWidth: 0.2,
        }}>
        <View>
          <Text
            style={{
              marginTop: 15,
              color: 'black',
              marginLeft: 50,
              fontSize: 15,
              marginBottom: 10,
              fontWeight: '900',
              color: 'black',
            }}>
            Order Summary
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}>
            <View>
              <Text
                style={{fontWeight: '900', color: 'black', marginBottom: 10}}>
                Sub total
              </Text>
              <Text
                style={{fontWeight: '900', color: 'black', marginBottom: 10}}>
                Shipping (standard 5-8 Days)
              </Text>
              <Text
                style={{fontWeight: '900', color: 'black', marginBottom: 10}}>
                Tax{' '}
              </Text>
              <Text
                style={{fontWeight: '900', color: 'black', marginBottom: 10}}>
                Total{' '}
              </Text>
            </View>
            <View>
              <Text
                style={{fontWeight: '900', color: 'black', marginBottom: 10}}>
                RS.36000
              </Text>
              <Text
                style={{fontWeight: '900', color: 'black', marginBottom: 10}}>
                RS. 150000
              </Text>
              <Text
                style={{fontWeight: '900', color: 'black', marginBottom: 10}}>
                RS. 1425000
              </Text>
              <Text
                style={{fontWeight: '900', color: 'black', marginBottom: 10}}>
                RS. 1425000
              </Text>
            </View>
          </View>
          <View style={style.verifedagent}>
            <TouchableOpacity>
              <Text
                style={style.verfiedagenttext}
                onPress={() => navigate.navigate(Sucessfullorder)}>
                CONFIRM ORDER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  cart1: {
    marginTop: 5,
    height: 130,
    alignContent: 'center',
    width: wp(90),
    margin: 5,
    marginHorizontal: 25,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 30,
  },
  itemimage: {
    width: wp(27),
    height: hp(18),
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#00599D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  verifedagent: {
    marginTop: 5,
    backgroundColor: '#00599D',
    borderWidth: 0.5,
    borderRadius: 20,
    width: wp(80),
    height: hp(6),
    marginLeft: wp(10),
  },
  verfiedagenttext: {
    marginTop: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  itemimage: {
    width: wp(27),
    height: hp(18),
  },
});

export default CheckoutPage;
