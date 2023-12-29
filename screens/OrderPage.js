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
import ProfilePage from './ProfilePage';
import { useNavigation } from '@react-navigation/native';
import OrderDetail from './OrderDetail';

const OrderPage = () => {
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
            onPress={() => navigate.navigate(ProfilePage)}
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
            Order List
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.cart1}>
          <View
            style={{
              height: 128,
              width: 110,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderRightWidth: 0.2,
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
            <Text
              style={{
                color: 'black',
                marginLeft: 10,
                fontSize: 20,
              }}>
              RS. 451110
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 10,
              height: 40,
              width: 90,
              borderRadius: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#555',
                  textAlign: 'center',
                  marginTop: 7,
                  fontWeight: 'bold',
                }}>
                Order Status
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{}}></View>
          <TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                top: 95,
                right: 5,
                height: 30,
                width: 100,
                borderWidth: 0.3,
                borderRadius: 5,
                backgroundColor: '#0e4183',
                borderColor: '#f7454a',
              }}>
              <Text style={{color: 'white', textAlign: 'center', marginTop: 5}}   onPress={() => navigate.navigate(OrderDetail)}>
                Order Details
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                position: 'absolute',
                top: 95,
                left: 20,
                height: 30,
                width: 100,
                borderWidth: 0.3,
                borderRadius: 5,
                backgroundColor: '#0e4183',
                borderColor: '#f7454a',
              }}>
              <Text style={{color: 'white', textAlign: 'center', marginTop: 5}}>
                Cancel Order
              </Text>
            </View>
          </TouchableOpacity>
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

  cart1: {
    marginTop: 15,
    height: 140,
    alignContent: 'center',
    width: wp(95),
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 5,
    borderWidth: 0.2,
    margin: 10,
  },
  itemimage: {
    width: wp(29),
    height: hp(16),
    marginTop: 8,
  },
});

export default OrderPage;
