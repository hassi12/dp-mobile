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
import CheckoutPage from './CheckoutPage';
import {useSelector, useDispatch} from 'react-redux';
import {
  getCartTotal,
  remove,
  toggleCartQty,
  clearCart,
} from '../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const {
    data: cartProducts,
    totalItems,
    totalAmount,
    deliveryCharge,
  } = useSelector(state => state.cart);
  // const navigate = useNavigate()

  useEffect(() => {
    dispatch(getCartTotal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useSelector(state => state.cart)]);

  const images = [
    require('../assets/dog1.jpg'),
    require('../assets/cat1.jpg'),
    require('../assets/birds1.jpg'),
    require('../assets/pets.jpg'),
  ];

  const handleRemove = id => {
    dispatch(remove(id));
    // toast.error("Product Remove successfully", {
    //   position: toast.POSITION.TOP_RIGHT,
    //   theme: "colored",
    // });
  };

  // clear cart
  const clear = () => {
    dispatch(clearCart());
    // toast.error("Clear Cart successfully", {
    //   position: toast.POSITION.BOTTOM_RIGHT,
    //   theme: "colored",
    // });
  }

  const navigate = useNavigation();
  // const [quantity, setQuantity] = useState(1);

  const handleIncrement = id => {
    dispatch(toggleCartQty({id: id, type: 'INC'}));
  };

  const handleDecrement = id => {
    dispatch(toggleCartQty({id: id, type: 'DEC'}));
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
  const TotalPrice = p => {
    /* eslint eqeqeq: 0 */
    if (p == 0) {
      return `-`;
    } else {
      return `${p}`;
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#e4e8f1'}}>
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
            onPress={() => navigate.navigate(Tabs)}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#00599d',
              fontSize: 30,
              marginLeft: 40,
            }}>
            MY CART{' '}
          </Text>
        </View>
      </View>

      <ScrollView>
        {cartProducts.length === 0 ? <Text>No Items are add in Cart</Text> : ''}
        {cartProducts.map(cartProducts => {
          return (
            <View style={styles.cart1}>
              <View
                style={{
                  height: 130,
                  width: 100,
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  backgroundColor: '#e9eef7',
                }}>
                <Image
                  source={{uri: cartProducts?.images[0]?.image_url}}
                  style={styles.itemimage}
                />
              </View>
              <View>
                <Text
                  style={{
                    marginTop: 30,
                    color: 'black',
                    marginLeft: 10,
                    fontSize: 20,
                  }}>
                  {cartProducts?.title.substring(0, 11)}
                </Text>

                <View style={styles.container}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleDecrement(cartProducts.id)}>
                    <Text style={styles.buttonText}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>
                    {cartProducts?.quantity}
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleIncrement(cartProducts.id)}>
                    <Text style={styles.buttonText}>+</Text>
                  </TouchableOpacity>
                  <Text
                    style={{marginLeft: 50, fontWeight: '900', color: 'black'}}>
                   Rs {TotalPrice(cartProducts?.totalPrice)}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  height: 40,
                  width: 40,
                  backgroundColor: '#00599D',
                  borderWidth: 1,
                  borderTopRightRadius: 25,
                  borderBottomLeftRadius: 25,
                }}>
                <TouchableOpacity onPress={() => handleRemove(cartProducts.id)}>
                  <AntDesign
                    name="delete"
                    style={{marginLeft: 10}}
                    size={20}
                    marginTop={8}
                    color={'#ffffff'}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
      {/* <View> */}
        <TouchableOpacity onPress={()=> clear()}>
          <Text>Clear Cart</Text>
        </TouchableOpacity>
      {/* </View> */}
      <View
        style={{
          height: 200,
          width: wp(100),
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          backgroundColor: '#ffffff',
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
            {totalItems} Items in the cart
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 50,
            }}>
            <View>
              <Text style={{fontWeight: '900', color: 'black'}}>Sub total</Text>
              <Text style={{fontWeight: '900', color: 'black'}}>
                Delivery Cost
              </Text>
              <Text style={{fontWeight: '900', color: 'black'}}>Discount</Text>
              <Text style={{fontWeight: '900', color: 'black'}}>Total</Text>
            </View>
            <View>
              <Text style={{fontWeight: '900', color: 'black'}}>
                {total(totalAmount)}
              </Text>
              <Text style={{fontWeight: '900', color: 'black'}}>RS. --</Text>
              <Text style={{fontWeight: '900', color: 'black'}}>RS. -</Text>
              <Text style={{fontWeight: '900', color: 'black'}}>
                Rs {total(totalAmount) + deliveryPrice(deliveryCharge)}
              </Text>
            </View>
          </View>
          <View style={styles.verifedagent}>
            <TouchableOpacity>
              <Text
                style={styles.verfiedagenttext}
                onPress={() => navigate.navigate(CheckoutPage)}>
                Check Out
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 20,
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

export default CartPage;
