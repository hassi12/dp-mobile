import 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OrderPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <TouchableOpacity>
          <Text style={styles.listText}>
            <AntDesign name="left" size={30} />
            {'          '}
            Order List
          </Text>
        </TouchableOpacity>
        <View>
          <View style={styles.cart1}>
            <View
              style={{
                height: 128,
                width: 110,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                backgroundColor: '#e9eef7',
              }}>
              <Image
                source={require('../assets/petfood32.png')}
                style={styles.itemimage}
              />
            </View>
            <View>
              <Text
                style={{
                  marginTop: 15,
                  color: 'black',
                  marginLeft: 10,
                  fontSize: 20,
                }}>
                D4 Chair
              </Text>
            </View>
            <TouchableOpacity></TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                top: 88,
                right: 20,
                height: 40,
                width: 90,
                borderRadius: 10,
              }}>
              <TouchableOpacity>
                <Text style={{color: 'red', textAlign: 'center', marginTop: 7}}>
                  Cancel Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    marginTop: 10,
    margin: 10,
  },
  listText: {
    fontSize: 25,
    color: 'black',
  },
  cart1: {
    marginTop: 15,
    height: 130,
    alignContent: 'center',
    width: wp(95),
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  itemimage: {
    width: wp(29),
    height: hp(16),
    marginTop: 8,
  },
});

export default OrderPage;
