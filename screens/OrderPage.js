import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { Userorders } from '../services/order_services';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigation();
  const user = useSelector(state => state.user);
  const userId = user.user.id;

  const userToken = useSelector(state => state.user.token);

  let headers = {};
  if (userToken) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${userToken}`,
    };
  }
  useEffect(() => {
    handleOrders();
  }, []);

  const handleOrders = async () => {
    try {
      let data = await Userorders(headers);
      // console.log('order-check',data.results);
      setOrders(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate.navigate('Tabs')}>
          <AntDesign name="left" size={25} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Order History</Text>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text style={styles.orderText}>
              Total Amount: {parseFloat(item?.total_amount).toFixed(0)}
            </Text>
            <Text style={styles.orderText}>Order Date: {moment(item?.created_at).format("MM-DD-YYYY")}</Text>
            <Text style={styles.orderText}>Order ID: {item?.order_number}</Text>
            <Text style={styles.orderText}>Quantity: {item?.total_quantity}</Text>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>Status: {item.status}</Text>
              <TouchableOpacity style={styles.detailsButton} onPress={() => navigate.navigate('OrderDetail', {orderId: item?.id})}>
              <Text style={styles.detailsButtonText}>Order Details</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(6),
    paddingHorizontal: wp(2),
  },
  backButton: {
    paddingRight: wp(4),
  },
  headerText: {
    color: 'black',
    fontSize: hp(2.5),
    marginLeft: wp(20),
  },
  orderItem: {
    marginTop: hp(1),
  padding: wp(4),
  backgroundColor: '#ffffff',
  borderRadius: wp(2),
  borderWidth: wp(0.2),
  marginHorizontal: wp(2),
  // Android shadow5 
  elevation: 3,
  // iOS shadow
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  },
  orderText: {
    color: 'black',
    fontSize: hp(2),
    marginBottom: hp(1),
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusText: {
    color: '#555',
    fontWeight: 'bold',
  },
  cancelButton: {
    color: 'red',
    fontSize: hp(2),
    fontWeight: 'bold',
  },
  detailsButton: {
    marginTop: hp(2),
    backgroundColor: '#0e4183',
    borderRadius: wp(1),
    paddingVertical: hp(1),
    paddingHorizontal: wp(2),
    alignSelf: 'flex-start',
  },
  detailsButtonText: {
    color: 'white',
    fontSize: hp(1.8),
  },
});

export default OrderPage;
