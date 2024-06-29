import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {rotationHandlerName} from 'react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler';
import Tabs from '../tabs/tabs';
import {useNavigation,useRoute} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AddressPage from './AddressPage';
import Sucessfullorder from './Sucessfullorder';
import AddressList from './AddressList';
import {useDispatch} from 'react-redux';
import {getCartTotal} from '../store/cartSlice';
import {UserDetail} from '../services/User_services';

const CheckoutPage = () => {
  const route = useRoute();
  const { id,phone_number, email_address, address1 } = route.params || {};
  
  const [address, setAddress] = useState([]);
  const User = useSelector(state => state.user);
  const UserId = User.user.id;
  const [selectedAddressPhone, setSelectedAddressPhone] = useState(phone_number || '');
  const [selectedAddressEmail, setSelectedAddressEmail] = useState(email_address || '');
  const [selectedAddress, setSelectedAddress] = useState(address1 || '');
  const [selectedAddressId, setSelectedAddressId] = useState(id || '');

  const usertoken = useSelector(state => state.user.token);
  let headers = {};
  if (usertoken) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${usertoken}`,
    };
  }
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalAmount,
    deliveryCharge,
  } = useSelector(state => state.cart);
  // const navigate = useNavigate()
  console.log('cartProducts', cartProducts);
  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useSelector(state => state.cart)]);

  const handlePlaceOrder = async () => {
    console.warn('place order');
  };

  const total = p => {
    /* eslint eqeqeq: 0 */
    if (p == 0) {
      return `-`;
    } else {
      return `${parseFloat(p).toFixed(0)}`;
    }
  };
  const deliveryPrice = p => {
    /* eslint eqeqeq: 0 */
    if (p == 0) {
      return `-`;
    } else {
      return `${parseFloat(p).toFixed(0)}`;
    }
  };
  const TotalPrice = p => {
    /* eslint eqeqeq: 0 */
    if (p == 0) {
      return `-`;
    } else {
      return `${parseFloat(p).toFixed(0)}`;
    }
  };

  const discountPrice = (d) => {
    if (d == 0) {
      return "";
    } else {
      return `Rs ${parseFloat(d).toFixed(0)}`;
    }
  };

  const price = (p) => {
    /* eslint eqeqeq: 0 */
    if (p == 0) {
      return `-`
    } else {
      return `${parseFloat(p).toFixed(0)}`
    }
  }

  useEffect(() => {
    HandleUsers();
  }, []);

  useEffect(() => {
    if (id) {
      setSelectedAddressPhone(phone_number);
      setSelectedAddressEmail(email_address);
      setSelectedAddress(address1);
      setSelectedAddressId(id);
    }
  }, [id, phone_number, email_address, address1]);

  const HandleUsers = async () => {
    try {
      let res = await UserDetail(UserId, headers);
      setAddress(res);
      // setSelectedAddressPhone(
      //   res && res.addresses && res.addresses[0].phone_number,
      // );
      // setSelectedAddressEmail(
      //   res && res.addresses && res.addresses[0].email_address,
      // );
      // setSelectedAddress(res && res.addresses && res.addresses[0].address);
      // setSelectedAddressId(res && res.addresses && res.addresses[0].id);
      const defaultAddress = res.addresses && res.addresses[0];
      if (defaultAddress) {
          setSelectedAddressPhone(defaultAddress.phone_number);
          setSelectedAddressEmail(defaultAddress.email_address);
          setSelectedAddress(defaultAddress.address);
          // setSelectedProvinces(defaultAddress.province);
          setSelectedAddressId(defaultAddress.id);          
      }
    } catch (error) {
      console.log(error);
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
              fontWeight: 'bold',
              color: '#333',
              fontFamily: 'Arial, sans-serif',
              textTransform: 'uppercase',
            }}>
            CheckOut
          </Text>
        </View>
      </View>
      <View style={style.cart1}>
        <Text
          style={{
            marginLeft: 125,
            fontWeight: 'bold',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            textTransform: 'uppercase',
          }}>
          Bill Details
        </Text>
        <Text
          style={{
            marginTop: 5,
            color: 'black',
            fontWeight: 'bold',
            marginLeft: 10,
            fontSize: 15,
          }}>
          Deliver to: {address?.username}
          <TouchableOpacity>
            <AntDesign
              name="right"
              style={{marginLeft: 330, fontSize: 20, color: 'black'}}
              onPress={() => navigate.navigate(AddressList)}
            />
          </TouchableOpacity>
        </Text>
        <View style={{marginLeft: 15}}>
          <Text style={{fontWeight: 500}}>Address:</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#333',
              fontFamily: 'Arial, sans-serif',
              // textTransform: 'uppercase',
            }}>
            {selectedAddress}
          </Text>
          <Text style={{fontWeight: 500}}>Email:</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#333',
              fontFamily: 'Arial, sans-serif',
            }}>
            {selectedAddressEmail}
          </Text>
          <Text style={{fontWeight: 500}}>Contact Number: </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#333',
              fontFamily: 'Arial, sans-serif',
              // textTransform: 'uppercase',
            }}>
            {selectedAddressPhone}
          </Text>
        </View>

        <Text style={{width: wp(100), marginLeft: 15, fontWeight: '100'}}>
          ____________________________________________________________
        </Text>
        <Text
          style={{
            marginTop: 3,
            color: 'black',
            marginLeft: 10,
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          Bill to the same address {'            '}
          <AntDesign
            name="right"
            style={{
              fontSize: 20,
              color: 'black',
            }}
          />
        </Text>
      </View>
      <View
        style={{
          height: hp(10),
          width: wp(95),
          backgroundColor: 'white',
          marginLeft: 10,
        }}>
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
                  <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  {cartProducts?.stock.length === 0 ? (
                    <Text style={style.priceText}>Rs {price(cartProducts?.price)}</Text>
                  ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                      {cartProducts?.stock[0]?.discount_price > 0 ? (
                        <>
                          <Text style={style.priceText}>
                            {discountPrice(cartProducts?.stock[0]?.discount_price)}
                          </Text>

                          <Text style={style.priceTextLine}>
                           Rs {price(cartProducts?.price)}
                          </Text>
                        </>
                      ) : (
                        <Text style={style.priceText}>Rs {price(cartProducts?.price)}</Text>
                      )}
                    </View>
                  )}
                </View>
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
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#333',
              fontFamily: 'Arial, sans-serif',
              textTransform: 'uppercase',
            }}>
            Total:
            <Text style={{color: 'red'}}>
              {' '}
              Rs: {total(totalAmount) + deliveryPrice(deliveryCharge)}
            </Text>
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
    height: hp(35),
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
  priceTextLine: {
    fontSize: 10,
    fontWeight: 'bolder',
    color: 'gray',
    marginLeft: 4,
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
    textDecorationLine: 'line-through'
  },
  priceText: {
    marginLeft: 10
  }
});

export default CheckoutPage;
