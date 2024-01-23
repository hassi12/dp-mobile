import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import HomePageSearch from '../components/HomePagesearch';
import PetProfile from '../components/PetProfile';
import {SliderBox} from 'react-native-image-slider-box';
import DetailPage from './DetailPage';
import {getProducts} from '../services/Products_services';
import CardData from '../components/CardData';

const HomePage = () => {
  const {height, width} = Dimensions.get('window');

  useEffect(() => {
    handleProducts();
    ProductCategoryList();
  }, []);

  const navigate = useNavigation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState([]);

  const images = [
    require('../assets/dog1.jpg'),
    require('../assets/cat1.jpg'),
    require('../assets/birds1.jpg'),
    require('../assets/pets.jpg'),
  ];

  const handleProducts = async () => {
    try {
      let res = await getProducts();
      setProducts(res.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  const ProductCategoryList = async () => {
    try {
      let res = await axios.get(
        `http://ec2-43-206-254-199.ap-northeast-1.compute.amazonaws.com/api/v1/category/`,
      );
      console.log('categories', res.data.results);
      setCategory(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.bottomview}>
          <HomePageSearch />
        </View>
      </SafeAreaView>
      {/* main slider */}
      {/* <View style={styles.sliderviewstyle}>
        <SliderBox
          images={images}
          dotColor="white"
          inactiveDotColor="white"
          dotstyle
          circleLoop={true}
          borderRadius={20}
          resizeMode="cover"
          sliderBoxHeight={hp(25)}
          autoplay={true}
        />
      </View> */}
      <View style={styles.shadowContainer}>
        <View style={styles.sliderviewstyle}>
          <SliderBox
            images={images}
            dotColor="white"
            inactiveDotColor="white"
            dotstyle
            circleLoop={true}
            borderRadius={20}
            resizeMode="cover"
            sliderBoxHeight={hp(25)}
            autoplay={true}
          />
        </View>
      </View>

      {/* main slider end */}
      {/* categories */}
      <View style={styles.petsview}>
        <Text style={styles.petstyle}>Select Your Pet</Text>
        <ScrollView horizontal>
          {/* <PetProfile /> */}
          {category &&
            category.map((category, index) => {
              return (
                // <Text key={index}>{item.name}</Text>
                <PetProfile category={category} />
              );
            })}
        </ScrollView>
      </View>
      {/* categories end */}
      <Text style={{color: '#bfbfbf', width: wp(95), textAlign: 'center'}}>
        ____________________________________________________
      </Text>
      <View style={styles.containertext}>
        <Text style={styles.titleText}>Top Rated products</Text>
        <Text
          style={styles.seeAllText}
          onPress={() => navigate.navigate(DetailPage)}>
          See All
        </Text>
      </View>

      {/* products */}
      <View style={styles.container11}>
        <CardData products={products} loading={loading} error={error} />
      </View>
      {/* products end */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    borderTopLeftRadius: 17,
    borderTopRightRadius: 17,
  },
  bottomview: {
    width: wp(99.5),
    paddingBottom: 12,
  },
  petsview: {
    width: wp(99.5),
    height: hp(15),
    borderColor: 'black',
    paddingTop: 12,
  },
  petstyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
  },
  // sliderviewstyle: {
  //   height: hp(24.5),
  //   width: wp(95),
  //   borderRadius: 15,
  //   overflow: 'hidden',
  // },
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // This is for Android
    borderRadius: 15,
    overflow: 'hidden', // Important to clip the shadow within the borderRadius
  },
  sliderviewstyle: {
    height: hp(24.5),
    width: wp(95),
    borderRadius: 15,
    overflow: 'hidden',
  },

  container11: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp(40), // Take up 100% width of the parent View
    height: hp(20), // Adjust the height as needed
  },
  containertext: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    fontSize: 14,
  },
  seeAllText: {
    fontWeight: 'bold',
    width: wp(98),
    textAlign: 'center',
    color: 'black',
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

export default HomePage;
