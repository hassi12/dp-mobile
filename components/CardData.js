import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Star from '../components/Star';

// import { useSelector } from 'react-redux';
const CardData = ({products, loading, error}) => {
  const navigate = useNavigation();
  // const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // const handleProductPress = (item) => {
  //   if (isAuthenticated) {
  //     navigate.navigate('ProductPage', { productId: item.id });
  //   } else {
  //     // Redirect to SignIn page or show a message
  //     navigate.navigate('SignIn');
  //     // Alternatively, you can show a message to the user.
  //     // Example: Alert.alert('Please sign in to view the product details');
  //   }
  // };
  const price = p => {
    if (p == 0) {
      return '';
    } else {
      return `Rs ${parseFloat(p).toFixed(0)}`;
    }
  };
  const discountPrice = d => {
    if (d == 0) {
      return '';
    } else {
      return `Rs ${parseFloat(d).toFixed(0)}`;
    }
  };

  return (
    <View style={styles.horizontalView}>
      {loading ? (
        <ActivityIndicator color="red" size="large" />
      ) : error ? (
        <Text color="red">{error}</Text>
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          // horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}-${item.title}`}
          renderItem={({item}) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  navigate.navigate(`ProductPage`, {productId: item.id})
                }
                style={{width: wp(35)}}>
                <Image
                  source={{uri: item?.images[0]?.image_url}}
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={{marginTop: 4}}>
                <View style={styles.priceContainer}>
                  <Text style={styles.titleText}>
                    {item?.title.substring(0, 11)}
                  </Text>
                  <View style={styles.discountContainer}>
                    {
                      item?.stock.length === 0 ? ('') : ( <Text style={styles.discountText}>{parseFloat(item?.stock[0]?.discount_percentage).toFixed(0)}% OFF</Text>)
                    }
                  </View>
                </View>
                <Text style={{paddingLeft: 8, fontSize: 10}}>
                  {item?.category}
                </Text>
                <View style={styles.starContainer1}>
                  <Star stars={item?.average_rating} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                  {item?.stock.length === 0 ? (
                    <Text style={styles.priceText}>{price(item?.price)}</Text>
                  ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                      {item?.stock[0]?.discount_price > 0 ? (
                        <>
                          <Text style={styles.priceText}>
                            {discountPrice(item?.stock[0]?.discount_price)}
                          </Text>

                          <Text style={styles.priceTextLine}>
                            {price(item?.price)}
                          </Text>
                        </>
                      ) : (
                        <Text style={styles.priceText}>{price(item?.price)}</Text>
                      )}
                    </View>
                  )}
                </View>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    right: 5,
                  }}>
                  <AntDesign name="heart" size={20} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CardData;

const styles = StyleSheet.create({
  horizontalView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: wp(95),
    marginLeft: 5,
  },
  image: {
    width: wp(40),
    height: hp(17),
  },
  titleText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 0,
    fontFamily: 'Arial, sans-serif',
  },
  priceText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 8,
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
  },
  card: {
    width: wp(45),
    height: hp(27),
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 5,
    margin: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Optional: Align items in the center vertically
    paddingHorizontal: 9,
  },
  discountContainer: {
    marginLeft: 'auto', // Push the discount text to the right
  },
  discountText: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
  },
  starContainer1: {
    paddingHorizontal: 1,
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
