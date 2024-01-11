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
  const handleBackPress = () => {
    navigate.navigate('Tabs');
  };

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
  };

  const navigate = useNavigation();

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
    <View style={{flex: 1}}>
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
              fontSize: 25,
              color: 'black',
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={handleBackPress}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 100,
            marginTop: 10,
            fontSize: 20,
          }}>
          My Chart
        </Text>
      </View>

      <ScrollView>
        {cartProducts.length === 0 ? (
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              color: 'red',
              textAlign: 'center',
              marginTop: 100,
            }}>
            No Items are add in Cart
          </Text>
        ) : (
          ''
        )}
        {cartProducts.map(cartProducts => {
          return (
            <View style={styles.cart1} key={cartProducts.id}>
              <Image
                source={{uri: cartProducts?.images[0]?.image_url}}
                style={styles.itemimage}
              />
              <View>
                <Text
                  style={{
                    marginTop: 30,
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: '#333',
                    fontFamily: 'Arial, sans-serif',
                    textTransform: 'uppercase',
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
                    style={{
                      marginLeft: 50,
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: '#333',
                      fontFamily: 'Arial, sans-serif',
                      textTransform: 'uppercase',
                    }}>
                    Rs {TotalPrice(cartProducts?.totalPrice)}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 1,
                  right: 1,
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
      <TouchableOpacity
        onPress={() => clear()}
        style={{alignItems: 'center', marginVertical: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: 'red'}}>
          Clear Cart
        </Text>
      </TouchableOpacity>

      <View
        style={{
          height: hp(30),
          width: wp(100),
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          backgroundColor: 'white',
          borderWidth: 1,
        }}>
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
    borderWidth: 0.5,
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
    backgroundColor: '#00599D',
    borderWidth: 0.5,
    borderRadius: 20,
    width: wp(80),
    height: hp(6),
    marginLeft: wp(10),
    marginTop: 20,
  },
  verfiedagenttext: {
    marginTop: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  itemimage: {
    width: wp(27),
    height: hp(16),
    margin: 2,
    borderRadius: 20,
    marginTop: 5,
  },
});

export default CartPage;
