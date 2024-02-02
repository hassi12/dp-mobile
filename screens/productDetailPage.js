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
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../store/cartSlice';
import {useRoute} from '@react-navigation/native';
import {getProductDetail} from '../services/Products_services';
import CommentPage from './CommentPage';
import BottomTab from '../components/BottomTab';
import HomePage from './HomePage';
import moment from 'moment';
import Star from '../components/Star';
import Toast from 'react-native-toast-message';
import {SliderBox} from 'react-native-image-slider-box';

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const route = useRoute();
  const {productId} = route.params;
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    handleProductDetail();
  }, [productId]);

  const handleIncrement = () => {
    setQuantity(prevQty => {
      let newQty = prevQty + 1;
      return newQty;
    });
    Toast.show({
      type: 'success',
      text1: 'Quantity',
      text2: 'increase +1 successfully 👋',
      visibilityTime: 2000,
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
    Toast.show({
      type: 'error',
      text1: 'Quantity',
      text2: 'decrease -1 successfully 👋',
      visibilityTime: 2000,
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
      setComments(res.comments);
      console.log(res.item);
    } catch (error) {
      console.log(error);
    }
  };
  const {images} = product;
  const imageUrls = Array.isArray(images)
    ? images.map(image => image.image_url)
    : [];

  const dispatch = useDispatch();
  const addToCartHandler = product => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (isAuthenticated) {
      let totalPrice = quantity * product.price;
      const tempProduct = {
        ...product,
        quantity: quantity,
        totalPrice,
      };
      dispatch(add(tempProduct));
      navigate.navigate('Chart');
    } else {
      navigate.navigate('SignIn');
    }
  };
  const price = p => {
    /* eslint eqeqeq: 0 */
    if (p == 0) {
      return (
        <Text style={{fontSize: 7, color: 'red'}}>
          Please place an order for a quotation. Once the order is placed, our
          support team will call you.
        </Text>
      );
    } else {
      return <Text style={{fontSize: 16, color: 'green'}}>Rs {p}</Text>;
    }
  };
  const discountPrice = d => {
    if (d == 0) {
      return '';
    } else {
      return `Rs ${parseFloat(d).toFixed(0)}`;
    }
  };
  const prices = p => {
    if (p == 0) {
      return '';
    } else {
      return `Rs ${parseFloat(p).toFixed(0)}`;
    }
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
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 4,
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            elevation: 1,
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
              onPress={handleBackPress}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontWeight: 'bold',
              marginLeft: 100,
              marginTop: 10,
              fontSize: 20,
              color: '#333',
              fontFamily: 'Arial, sans-serif',
              textTransform: 'uppercase',
            }}>
            Product Detail
          </Text>
        </View>
      </SafeAreaView>
      <View style={styles.productview}>
        {/* slider image */}

        <View style={styles.shadowContainer}>
          <View style={styles.sliderviewstyle}>
            <SliderBox
              images={imageUrls}
              dotColor="white"
              inactiveDotColor="white"
              dotstyle
              circleLoop={true}
              borderRadius={20}
              resizeMode="cover"
              sliderBoxHeight={hp(25)}
              autoplay={false}
            />
          </View>
        </View>
        {/* <View
          style={{
            position: 'relative',
            borderRadius: 10,
            height: hp(26),
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
        </View> */}

        <View style={styles.container111}>
          <View style={styles.parallelView1}>
            <ScrollView>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 16,
                  marginLeft: 10,
                  marginTop: 4,
                }}>
                {product?.title}
              </Text>
              <Text style={{marginLeft: 10}}>{product?.category}</Text>
            </ScrollView>
            <View style={styles.priceContainer}>
              <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                {product?.stock?.length === 0 ? (
                  <Text style={styles.priceText}>{price(product?.price)}</Text>
                ) : (
                  <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    {product?.stock &&
                    product?.stock.length > 0 &&
                    product?.stock[0]?.discount_price !== undefined &&
                    product?.stock[0]?.discount_price > 0 ? (
                      <>
                        <Text style={styles.priceText}>
                          {discountPrice(product?.stock[0]?.discount_price)}
                        </Text>

                        <Text style={styles.priceTextLine}>
                          {prices(product?.price)}
                        </Text>
                      </>
                    ) : (
                      <Text style={styles.priceText}>
                        {prices(product?.price)}
                      </Text>
                    )}
                  </View>
                )}
              </View>
              <View style={styles.stars}>
                <Star stars={product?.average_rating} />
              </View>
            </View>
          </View>
          <View style={styles.parallelView2}>
            <Text
              style={{
                fontWeight: 'bold',
                paddingLeft: 15,
                color: 'black',
                fontSize: 17,
                marginTop: 8,
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
              marginTop: 2,
            }}>
            Product Discription
          </Text>
          <Text style={{paddingLeft: 10, marginTop: 3}}>
            {product?.description}
          </Text>
        </ScrollView>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View>
            <Text style={{color: 'black', fontWeight: 'bold', marginLeft: 15}}>
              Reviews
            </Text>
          </View>
          {/* {comments.length > 0 && ( */}
          <View style={{marginLeft: 230}}>
            <Text
              style={{color: 'black', fontWeight: 'bold'}}
              onPress={() => navigate.navigate('CommentPage', {productId})}>
              View more
            </Text>
          </View>
          {/* )} */}
        </View>
      </View>
      {/* comment section  */}
      {comments.length === 0 ? (
        <View style={{padding: 10, marginTop: 15}}>
          <Text style={{textAlign: 'center', color: 'black'}}>
            This product has no reviews.
          </Text>
        </View>
      ) : (
        <View
          style={{
            borderRadius: 10,
            width: '97%', // Use percentage for responsiveness
            height: 90, // Set a fixed height or adjust as needed
            marginTop: 8,
            marginHorizontal: 5, // Use marginHorizontal for equal margin on both sides
            borderWidth: 0.5,
            borderColor: '#ddd', // Set border color to a subtle shade
            backgroundColor: '#fff', // Set background color
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.2,
            shadowRadius: 3,
            elevation: 3, // Elevation for Android shadow
          }}>
          <View
            style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
            <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 2}}>
              {comments[0]?.user?.username}
            </Text>
            <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 5}}>
              on {moment(comments[0]?.created_at).startOf('minutes').fromNow()}
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 'auto'}}>
              <Star stars={comments[0]?.rating} />
            </View>
          </View>
          <ScrollView style={{flex: 1, paddingHorizontal: 10}}>
            <Text style={{color: 'black'}}>
              {/* Use your dynamic comment data */}
              {comments[0]?.text}
            </Text>
          </ScrollView>
        </View>
      )}
      {/* Add to cart page section  */}
      <View style={styles.BtnVerifedagent}>
        <TouchableOpacity
          style={styles.verifedagent}
          onPress={() => {
            addToCartHandler(product);
          }}>
          <Text style={styles.verfiedagenttext}>
            <FontAwesome5 name="shopping-bag" size={20} /> Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <BottomTab />
      </View>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'white',
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
    height: hp(42),
    marginLeft: 8,
    borderRadius: 5,
  },
  image: {
    width: wp(45),
    height: hp(25),
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
  BtnVerifedagent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifedagent: {
    backgroundColor: '#477200',
    borderWidth: 0.5,
    borderRadius: 12,
    width: wp(70),
    height: hp(6),
    marginTop: 12,
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
  },

  verfiedagenttext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 4,
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
  },
  priceTextLine: {
    fontSize: 16,
    fontWeight: 'bolder',
    color: 'gray',
    marginLeft: 4,
    fontFamily: 'Arial, sans-serif',
    textTransform: 'uppercase',
    textDecorationLine: 'line-through',
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
    width: 25,
    height: 25,
    backgroundColor: '#00599D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginHorizontal: 6,
  },
  starUnselected1: {
    color: 'gold',
    marginTop: 10,
  },
  starhalf1: {
    color: 'gold',
    marginTop: 10,
  },
  starouline1: {
    color: 'lightgray',
    marginTop: 10,
  },

  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 15,
    overflow: 'hidden',
  },
  sliderviewstyle: {
    height: hp(24.5),
    width: wp(95),
    borderRadius: 15,
    overflow: 'hidden',
  },
});
export default ProductDetailPage;
