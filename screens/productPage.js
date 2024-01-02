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
import React, {useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {add} from '../store/cartSlice';
import {useRoute} from '@react-navigation/native';
import {getProductDetail} from '../services/Products_services';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const route = useRoute();
  const {productId} = route.params;

  useEffect(() => {
    handleProductDetail();
  }, []);

  const handleIncrement = () => {
    setQuantity(prevQty => {
      let newQty = prevQty + 1;
      return newQty;
    });
  };

  const handleDecrement = () => {
    setQuantity(prevQty => {
      let newQty = prevQty - 1;
      if (newQty < 1) {
        newQty = 1;
      }
      return newQty;
    });
  };

  const navigate = useNavigation();

  const handleBackPress = () => {
    navigate.navigate('Tabs');
  };

  const handleProductDetail = async () => {
    try {
      let res = await getProductDetail(productId);
      setProduct(res.item);
    } catch (error) {
      console.log(error);
    }
  };
  const {images} = product;
  // navigate.navigate(CartPage)
  const dispatch = useDispatch();
  const addToCartHandler = product => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let totalPrice = quantity * product.price;
    const tempProduct = {
      ...product,
      quantity: quantity,
      totalPrice,
    };
    dispatch(add(tempProduct));
    navigate.navigate('Chart');
  };

  return (
    <View style={styles.container1}>
      <SafeAreaView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: wp(100),
            height: 45,
            borderRadius: 4,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 4,
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
            Product Detail
          </Text>
        </View>
      </SafeAreaView>
      <View style={styles.productview}>
        <View
          style={{
            position: 'relative',
            borderRadius: 10,
            height: hp(34),
          }}>
          <TouchableOpacity style={{position: 'absolute', top: 0, right: 0}}>
            <AntDesign
              name="heart"
              size={20}
              style={{color: 'red', marginRight: 15, marginTop: 10}}
            />
          </TouchableOpacity>
          <Image
            source={{uri: product.images && product.images[0]?.image_url}}
            style={styles.image}
          />
        </View>

        <View style={styles.container111}>
          <View style={styles.parallelView1}>
            <ScrollView>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 20,
                  marginLeft: 10,
                }}>
                {product?.title}
              </Text>
              <Text style={{marginLeft: 10}}>{product?.category}</Text>
            </ScrollView>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>RS. {product?.price}</Text>
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
                paddingLeft: 15,
                color: 'black',
                fontSize: 20,
              }}>
              Quantity
            </Text>

            <View style={styles.container}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleDecrement()}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => handleIncrement()}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: wp(94),
          height: hp(19),
          borderRadius: 10,
          borderRadius: 20,
          marginLeft: 10,
        }}>
        <ScrollView>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              paddingLeft: 10,
              marginTop: 10,
            }}>
            Product Discription
          </Text>
          <Text style={{paddingLeft: 10, marginTop: 5}}>
            {product?.description}
          </Text>
        </ScrollView>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold'}}> Reviews</Text>
          </View>
          <View style={{marginLeft: 230}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}> View more</Text>
          </View>
        </View>
      </View>

      {/* comment section  */}
      <View
        style={{
          borderRadius: 5,
          width: wp(97),
          marginTop: 10,
          margin: 5,
          borderWidth: 0.2,
          borderRadius: 10,
          height: hp(11),
        }}>
        <View style={styles.stars}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
            }}>
            Atif Badini
          </Text>
          <MaterialIcons
            name="star"
            size={20}
            style={styles.starUnselected}
            marginLeft={180}
          />
          <MaterialIcons name="star" size={20} style={styles.starUnselected} />
          <MaterialIcons name="star" size={20} style={styles.starUnselected} />
          <MaterialIcons name="star-half" size={20} style={styles.starhalf} />
          <MaterialIcons
            name="star-outline"
            size={20}
            style={styles.starouline}
          />
        </View>
        <View
          style={{
            width: wp(94),
            height: hp(12),
            borderRadius: 10,
            margin: 10,
          }}>
            
          </View>
      </View>
      <View style={styles.verifedagent}>
        <TouchableOpacity
          onPress={() => {
            addToCartHandler(product);
          }}>
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
  },
  seeAllText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginRight: 130,
  },
  productview: {
    marginTop: 5,
    width: wp(95),
    height: hp(49),
    marginLeft: 8,
    borderRadius: 5,
  },
  image: {
    width: wp(50),
    height: hp(30),
    marginLeft: wp(20),
    marginBottom: 4,
    marginTop: 5,
  },
  container111: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    paddingLeft: 50,
  },

  review: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
  },
  reviewimage: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(11),
    marginRight: wp(3),
    marginTop: 15,
  },
  firstImage: {
    marginLeft: wp(2),
  },
  verifedagent: {
    marginTop: 15,
    backgroundColor: '#477200',
    borderWidth: 0.5,
    borderRadius: 20,
    width: wp(50),
    height: hp(6),
    marginLeft: wp(25),
    marginBottom: 15,
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
    marginLeft: 6,
  },
  priceText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 4,
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
  },

  ReviewText3: {
    paddingLeft: 10,
    width: wp(95),
  },
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

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
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
    marginHorizontal: 6,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: wp(95),
    marginLeft: 5,
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 1,
    shadowRadius: 10,
  },
});
export default ProductPage;
