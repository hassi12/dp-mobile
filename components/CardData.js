import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
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

  return (
    <View>
      <View style={styles.horizontalView}>
        {loading ? (
          <ActivityIndicator color="red" size="large" />
        ) : error ? (
          <Text color="red">{error}</Text>
        ) : 
        (
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
                    // handleProductPress(item)
                  }
                  style={{width: wp(35)}}>
                  <Image
                    source={{uri: item?.images[0]?.image_url}}
                    style={styles.image}
                  />
                </TouchableOpacity>

                <Text style={styles.priceText}>
                  {item?.title.substring(0, 11)}
                </Text>
                <Text style={{paddingLeft: 15, fontSize: 12}}>
                  {item?.category}
                </Text>
                <Text style={styles.priceText}>Rs {item?.price}</Text>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    right: 2,
                    backgroundColor: 'white',
                    borderRadius: 20,
                    padding: 2,
                  }}>
                  <AntDesign name="heart" size={15} color="red" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: 5,
                    right: 5,
                    backgroundColor: '#eb2d1c',
                    borderRadius: 20,
                    padding: 5,
                  }}>
                  <AntDesign name="plus" size={20} color="white" />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

export default CardData;

const styles = StyleSheet.create({
  horizontalView: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap into the next line
    justifyContent: 'space-between', // Space items evenly in each line
    width: wp(95),
  },
  image: {
    width: wp(40), // Take up 100% width of the parent View
    height: hp(20), // Adjust the height as needed
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    paddingLeft: 15,
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
  },
  card: {
    width: wp(45),
    height: hp(30),
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
});
