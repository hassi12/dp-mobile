import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductPage = () => {
  const images = [
    require('../assets/dog1.jpg'),
    require('../assets/cat1.jpg'),
    require('../assets/birds1.jpg'),
    require('../assets/pets.jpg'),
  ];
  const navigate = useNavigation();

  const handleBackPress = () => {
    navigate.navigate('Tabs');
  };
  return (
    <View style={styles.container1}>
      <View>
        <SafeAreaView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <TouchableOpacity
            onPress={handleBackPress}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign
              name="left"
              size={20}
              style={{color: 'black', marginRight: 100}}
            />
            <Text style={styles.seeAllText}>Product Details</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>

      <View style={styles.productview}>
        <View style={{marginTop: 10, position: 'relative'}}>
          <TouchableOpacity style={{position: 'absolute', top: 0, right: 0}}>
            <AntDesign
              name="heart"
              size={17}
              style={{color: 'red', paddingRight: 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/food1.jpeg')}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container111}>
          <View style={styles.parallelView1}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
              }}>
              Pedigree
            </Text>
            <Text>Beef and vegitables</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>RS. 230</Text>

              <View style={styles.stars}>
                <MaterialIcons
                  name="star"
                  size={20}
                  style={styles.starUnselected}
                />
                <MaterialIcons
                  name="star"
                  size={20}
                  style={styles.starUnselected}
                />
                <MaterialIcons
                  name="star"
                  size={20}
                  style={styles.starUnselected}
                />
                <MaterialIcons
                  name="star-half"
                  size={20}
                  style={styles.starhalf}
                />
                <MaterialIcons
                  name="star-outline"
                  size={20}
                  style={styles.starouline}
                />
              </View>
            </View>
          </View>
          <View style={styles.parallelView2}>
            <Text
              style={{
                fontWeight: 'bold',
                paddingLeft: 40,
                color: 'black',
              }}>
              Quantity
            </Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity>
                <FontAwesome name="minus" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>1</Text>
              <TouchableOpacity>
                <FontAwesome name="plus" size={20} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{borderRadius: 10, width: wp(94), height: hp(11)}}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              paddingLeft: 15,
            }}>
            Product Discription
          </Text>
          <Text style={{paddingLeft: 15}}>
            this product is called prdigree whhich is fond and made by itlay{' '}
          </Text>
        </View>
      </View>

      {/* comments section with view */}
      <View style={styles.review}>
        <View style={styles.container111}>
          <View style={styles.reviewView1}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'black',
              }}>
              Atif Badini
            </Text>
          </View>
          <View style={styles.reviewView2}>
            <View style={styles.stars}>
              <MaterialIcons
                name="star"
                size={20}
                style={styles.starUnselected}
              />
              <MaterialIcons
                name="star"
                size={20}
                style={styles.starUnselected}
              />
              <MaterialIcons
                name="star"
                size={20}
                style={styles.starUnselected}
              />
              <MaterialIcons
                name="star-half"
                size={20}
                style={styles.starhalf}
              />
              <MaterialIcons
                name="star-outline"
                size={20}
                style={styles.starouline}
              />
            </View>
          </View>
        </View>
      </View>
      <View>
        <ScrollView>
          <Text style={styles.ReviewText3}>
            I have found this product very good please buy as much as you can.
            django per is the copy right of partum soluitons
          </Text>
        </ScrollView>
      </View>

      <View style={styles.verifedagent}>
        <TouchableOpacity>
          <Text style={styles.verfiedagenttext}>
            <FontAwesome5 name="shopping-bag" size={20} /> Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  seeAllText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    marginRight: 130,
  },
  productview: {
    marginTop: 15,
    width: wp(95),
    height: hp(68),
    marginLeft: 8,
    borderRadius: 5,
  },
  image: {
    width: 270,
    height: 270,
    resizeMode: 'cover',
    marginLeft: wp(15),
  },
  container111: {
    flexDirection: 'row', // Horizontal arrangement
    justifyContent: 'space-between', // Equal spacing between views
    padding: 10,
  },
  parallelView1: {
    width: wp(50),
    height: hp(15),
  },
  parallelView2: {
    marginHorizontal: 8,
    width: wp(30),
  },
  reviewView1: {
    width: wp(50),
  },
  reviewView2: {
    marginHorizontal: 8,
    width: wp(30),
    paddingLeft: 20,
  },

  // Review comment secion style

  review: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  reviewimage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(11),
    marginRight: wp(3),
    marginTop: 15,
  },
  firstImage: {
    marginLeft: wp(2), // Adjust the spacing for the first image
  },
  verifedagent: {
    marginTop: 25,
    backgroundColor: '#87b83b',
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
  revietime: {
    fontWeight: 'bold',
    color: 'black',
  },
  reviewstext1: {
    marginLeft: 10,
    marginTop: 2,
    fontWeight: '900',
    color: 'gray',
  },
  reviewstext2: {
    marginLeft: 15,
    fontWeight: '500',
  },
  stars: {
    flexDirection: 'row',
  },
  starUnselected: {
    color: 'gold',
  },
  starouline: {
    color: 'lightgray',
  },
  starhalf: {
    color: 'gold',
  },
  reviewDetails: {
    flex: 1,
    marginLeft: 10,
  },
  reviewstext1: {
    fontWeight: 'bold',
  },
  reviewstext2: {
    color: 'gray',
  },
  priceContainer: {
    marginTop: 5,
  },
  priceText: {
    fontSize: 24, // Adjust the font size as needed
    fontWeight: 'bold',
    color: 'green', // Adjust the color as needed
  },

  // review text style
  ReviewText3: {
    paddingLeft: 35,
    width: wp(90),
  },

  // quantity button style
  quantityContainer: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingLeft: 35,
    paddingTop: 10,
    paddingBottom: 3,
    backgroundColor: '#e5e5e5',
  },
  quantityText: {
    marginHorizontal: 11,
    fontSize: 17,
  },
});
export default ProductPage;
