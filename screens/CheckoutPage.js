import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
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
import AddressList from './AddressList';
import {useSelector, useDispatch} from 'react-redux';
import {getCartTotal} from '../store/cartSlice';

const CheckoutPage = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalAmount,
    deliveryCharge,
  } = useSelector(state => state.cart);
  // const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useSelector(state => state.cart)]);

  const handlePlaceOrder = async () => {
    console.warn('place order')
  }

  const TotalPrice = p => {
    /* eslint eqeqeq: 0 */
    if (p == 0) {
      return `-`;
    } else {
      return `${p}`;
    }
  };
  const total = p => {
    /* eslint eqeqeq: 0 */
    if (p == 0) {
      return `-`;
    } else {
      return `${p}`;
    }
  };
  const deliveryPrice = p => {
    /* eslint eqeqeq: 0 */
    if (p == 0) {
      return `-`;
    } else {
      return `${p}`;
    }
  };

  return (
    <SafeAreaView style={style.base}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          height: hp(6),
          marginBottom: 5,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <AntDesign
            name="left"
            size={25}
            color={'black'}
            onPress={() => navigate.navigate(`Chart`)}
          />
        </TouchableOpacity>
        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              marginLeft: 100,
              marginTop: 5,
            }}>
            CheckOut
          </Text>
        </View>
      </View>

      <View style={style.cart1}>
        <Text
          style={{
            marginTop: 5,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 10,
            fontSize: 15,
          }}>
          Deliver to: Atif Badini
          <TouchableOpacity>
            <AntDesign
              name="right"
              style={{marginLeft: 330, fontSize: 20, color: 'black'}}
              onPress={() => navigate.navigate(AddressList)}
            />
          </TouchableOpacity>
        </Text>

        <Text
          style={{
            fontSize: 13,
            width: wp(85),
            color: 'black',
            marginLeft: 10,
          }}>
          Atif Badini , lake city Lahore near zargoon city, quetta nushki ,
          balochistan-
        </Text>
        {/* <TouchableOpacity>
          <Text
            style={{marginLeft: 20, marginTop: 10, color: 'blue'}}
            onPress={() => navigate.navigate(AddressPage)}>
            Edit <AntDesign name="right"></AntDesign>{' '}
          </Text>
        </TouchableOpacity> */}
        <Text style={{width: wp(100), marginLeft: 15, fontWeight: '100'}}>
          ____________________________________________________________
        </Text>
        <Text
          style={{
            marginTop: 10,
            color: 'black',
            marginLeft: 10,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Bill to the same address
          <AntDesign
            name="right"
            style={{
              fontSize: 20,
              color: 'black',
            }}
          />
        </Text>
      </View>
      <View style={{height: 70, backgroundColor: 'white', margin: 10}}>
        <Text
          style={{
            marginTop: 5,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 10,
            fontSize: 15,
          }}>
          Payment method :
        </Text>
        <Text style={{marginLeft: 10, marginTop: 5, justifyContent: 'center'}}>
          Cash on Delivery
        </Text>
      </View>
      <ScrollView>
        {cartProducts.map(cartProducts => {
          return (
            <View style={style.cart2} key={cartProducts.id}>
              <View
                style={{
                  height: hp(7),
                  width: wp(94),
                }}>
                <Text
                  style={{
                    marginTop: 10,
                    color: 'black',
                    marginLeft: 10,
                    fontSize: 15,
                    fontWeight: 'bold',
                  }}>
                  {cartProducts?.seller?.name}
                </Text>
                <Text
                  style={{width: wp(100), marginLeft: 15, fontWeight: '300'}}>
                  ________________________________________________________
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{uri: cartProducts?.images[0]?.image_url}}
                  style={style.itemimage}
                />
                <View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontWeight: '600',
                      color: 'black',
                      width: wp(70),
                    }}>
                    {cartProducts?.title.substring(0, 20)}
                  </Text>
                  <Text
                    style={{marginLeft: 10, fontWeight: '600', width: wp(70)}}>
                    {cartProducts?.category}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      marginTop: 10,
                      color: 'black',
                      fontWeight: '600',
                      width: wp(70),
                    }}>
                    Rs {TotalPrice(cartProducts?.totalPrice)}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 235,
                      marginTop: 10,
                      color: 'black',
                      fontWeight: '600',
                      width: wp(70),
                    }}>
                    Qty: {cartProducts?.quantity}
                  </Text>
                </View>
              </View>
              <Text style={{width: wp(100), marginLeft: 15, fontWeight: '100'}}>
                ____________________________________________________________
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={style.bottomView}>
        <View>
          <Text>
            Total:
            <Text style={{color: 'red'}}> Rs {total(totalAmount) + deliveryPrice(deliveryCharge)}</Text>
          </Text>
          <Text>VAT included where applicable</Text>
        </View>
        <TouchableOpacity
          style={style.placeOrderButton}
          onPress={() => handlePlaceOrder()}>
          <Text style={style.placeOrderButtonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  base: {
    flex: 1,
  },
  cart1: {
    marginTop: 5,
    height: 160,
    alignContent: 'center',
    width: wp(95),
    marginLeft: 10,
    backgroundColor: 'white',
    margin: 15,
  },
  cart2: {
    marginTop: 19,
    height: 220,
    alignContent: 'center',
    width: wp(95),
    marginLeft: 10,
    backgroundColor: 'white',
  },
  itemimage: {
    width: wp(20),
    height: hp(15),
    marginLeft: 10,
    marginTop: 5,
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
  bottomView: {
    height: hp(10),
    borderWidth: 1,
    flexDirection: 'row',
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderTopWidth: 1, // Optional: Add a border to separate from the rest of the content
    borderTopColor: '#ccc', // Optional: Customize the border color
    height: 80, // Adjust the height as needed
  },
  placeOrderButton: {
    backgroundColor: 'red',
    height: 40,
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeOrderButtonText: {
    color: 'white',
  },
});

export default CheckoutPage;
