import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OrderPage from './OrderPage';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {UserorderDetail} from '../services/order_services';
import {useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import moment from 'moment';
import {FlatList} from 'react-native-gesture-handler';

const OrderDetail = () => {
  const [orderdetail, setOrderDetail] = useState();
  const route = useRoute();
  const {orderId} = route.params;
  const usertoken = useSelector(state => state.user.token);
  const User = useSelector(state => state.user);
  const UserId = User.user.id;

  let headers = {};
  if (usertoken) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${usertoken}`,
    };
  }

  useEffect(() => {
    HandleordersDetails();
  }, [orderId]);

  const HandleordersDetails = async () => {
    try {
      let data = await UserorderDetail(headers, orderId);
      console.log('idddddddd', data);
      setOrderDetail(data);
    } catch (error) {
      console.log(error);
    }
  };

  const price = (p) => {
    if (p == 0) {
      return `-`;
    } else {
      return `Rs ${parseFloat(p).toFixed(0)}`;
    }
  };
  const discountPrice = (d) => {
    if (d == 0) {
      return "";
    } else {
      return `Rs ${parseFloat(d).toFixed(0)}`;
    }
  };

  const navigate = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          height: hp(6),
          width: wp(99),
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
            onPress={() => navigate.navigate(OrderPage)}
          />
        </TouchableOpacity>
        <View style={{marginTop: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
              marginLeft: 70,
              marginTop: 3,
            }}>
            Order Details
          </Text>
        </View>
      </View>

      {/* header ends here */}

      {/* body starts here  */}
      <View
        style={{
          marginTop: 5,
          backgroundColor: 'white',
          height: hp(18),
          width: wp(99),
        }}>
        <Text style={{marginLeft: 15, fontSize: 17}}>Ship & bill to</Text>
        <Text
          style={{
            marginLeft: 15,
            marginTop: 10,
            color: 'black',
            fontWeight: '500',
          }}>
          {User?.user.username}
        </Text>
        <Text
          style={{
            marginLeft: 15,
            marginTop: 10,
            color: 'black',
            fontWeight: '500',
          }}>
          {orderdetail &&
            orderdetail.address &&
            orderdetail.address.phone_number}
        </Text>
        <Text style={{marginLeft: 15, width: wp(85)}}>
          {orderdetail && orderdetail?.address && orderdetail?.address.address}
        </Text>
      </View>
      <View
        style={{
          marginTop: 5,
          height: hp(30),
          width: wp(99),
          backgroundColor: 'white',
        }}>
        <ScrollView vertical>
          {orderdetail &&
            orderdetail.order_items?.map((item, index) => (
              <View
                key={index}
                style={{
                  marginTop: 5,
                  height: hp(30),
                  width: wp(99),
                  flexDirection: 'row',
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    height: 100,
                    width: 80,
                    marginLeft: 5,
                    marginTop: 20,
                  }}>
                  <Image
                    source={{uri: item.item?.images[0]?.image_url}}
                    style={styles.itemimage}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      marginTop: 30,
                      color: 'black',
                    }}>
                    {item.item.title.substring(0, 30)}
                  </Text>
                  <Text style={{}}>
                    Category {item.item.category}
                  </Text>
                  {/* <Text style={{color: 'black', fontWeight: '600'}}>
                    RS {parseFloat(item.item?.price).toFixed(0)}
                  </Text> */}
                  <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  {item.item?.stock.length === 0 ? (
                    <Text style={styles.priceText}>{price(item.item?.price)}</Text>
                  ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                      {item.item?.stock[0]?.discount_price > 0 ? (
                        <>
                          <Text style={styles.priceText}>
                            {discountPrice(item.item?.stock[0]?.discount_price)}
                          </Text>

                          <Text style={styles.priceTextLine}>
                            {price(item?.price)}
                          </Text>
                        </>
                      ) : (
                        <Text style={styles.priceText}>{price(item.item?.price)}</Text>
                      )}
                    </View>
                  )}
                </View>
                  <Text>X {item?.quantity}</Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    right: 5,
                    height: 40,
                    width: 90,
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      color: '#555',
                      textAlign: 'center',
                      marginTop: 7,
                      fontWeight: 'bold',
                      color: 'red',
                    }}>
                    {orderdetail && orderdetail.status}
                  </Text>
                </View>
                <TouchableOpacity>
                  <View
                    style={{
                      position: 'absolute',
                      top: 130,
                      right: 50,
                      height: 30,
                      width: 120,
                      borderWidth: 1,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        textAlign: 'center',
                        marginTop: 5,
                      }}>
                      Initiate Return
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      top: 130,
                      right: 40,
                      height: 30,
                      width: 120,
                      borderWidth: 1,
                      borderColor: '#f7454a',
                    }}>
                    <Text
                      style={{color: 'red', textAlign: 'center', marginTop: 5}}>
                      WRITE A REVIEW
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={{
                      top: 180,
                      right: 400,
                      height: 30,
                      width: 120,
                    }}>
                    <Text style={{textAlign: 'center', marginTop: 5}}>
                      <Feather name="package" style={{color: 'red'}} />
                      {''} Track package
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
      </View>
      <View
        style={{
          marginTop: 7,
          backgroundColor: 'white',
          height: hp(10),
          width: wp(99),
        }}>
        <Text style={{marginLeft: 10, color: '#0e4183', fontSize: 20}}>
          Order # {orderdetail && orderdetail?.order_number}
        </Text>
        <Text style={{marginLeft: 10}}>
          Placed{' '}
          {moment(orderdetail && orderdetail?.created_at).format('MM-DD-YYYY')}
        </Text>
        {/* <Text style={{marginLeft: 10}}>Paid on 03 june 2022 14:03</Text> */}
      </View>
      <View
        style={{
          marginTop: 5,
          backgroundColor: 'white',
          height: hp(10),
          width: wp(99),
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View style={{marginTop: 5}}>
          <Text style={{marginLeft: 10}}>Subtotal</Text>
          <Text style={{marginLeft: 10, marginTop: 10}}>Delivery Fee</Text>
        </View>
        <View style={{alignContent: 'flex-end', marginTop: 5}}>
          <Text style={{color: 'black'}}>
            RS {parseFloat(orderdetail?.total_amount).toFixed(0)}
          </Text>
          <Text style={{marginTop: 10, color: 'black'}}>
            {' '}
            RS.{orderdetail && orderdetail.shipping_amount}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: hp(10),
          width: wp(99),
          alignItems: 'flex-end',
        }}>
        <Text style={{marginRight: 20, color: 'black'}}>
          1 item , 1 pacakage
        </Text>
        <Text style={{marginRight: 20, color: 'black'}}>
          Total:{' '}
          <Text style={{color: 'red'}}>
            Rs. {parseFloat(orderdetail?.total_amount).toFixed(0)}
          </Text>
        </Text>
        <Text style={{marginRight: 20}}>
          paid by{' '}
          <Text style={{fontWeight: '500', color: 'black'}}>
            Cash on Delivery
          </Text>{' '}
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          backgroundColor: 'white',
          height: hp(8),
          width: wp(99),
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity
          style={styles.placeOrderButton}
          onPress={() => {
            // Handle place order action
          }}>
          <Text style={{color: 'white'}}> Buy Again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeOrderButton: {
    backgroundColor: 'orange',
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
    marginRight: 10,
  },

  itemimage: {
    width: wp(20),
    height: hp(12),
    marginTop: 8,
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
});
