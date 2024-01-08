import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {FavouriteItems} from '../services/Products_services';
import {useSelector} from 'react-redux';
import CardData from '../components/CardData';

const FavouritePage = () => {
  const [products, setProducts] = useState([]);
  const usertoken = useSelector(state => state.user.token);
  let headers = {};
  if (usertoken) {
    headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${usertoken}`,
    };
  }
  useEffect(() => {
    getFavuritedata();

    console.log(usertoken);
  }, []);
  const getFavuritedata = async () => {
    try {
      let data = await FavouriteItems(headers);
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigation();

  return (
    <View style={{flex: 1}}>
      {/* top naviagation  */}
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
        <TouchableOpacity>
          <AntDesign
            name="left"
            style={{
              fontSize: 25,
              color: 'black',
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={() => navigate.navigate('ProfilePage')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 100,
            marginTop: 10,
            fontSize: 20,
            textAlign: 'center',
          }}>
          Favourites
        </Text>
      </View>
      {/* body  */}
      <CardData products={products} />
    </View>
  );
};

export default FavouritePage;
