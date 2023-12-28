import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconComponentProvider} from '@react-native-material/core';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import {
  Alert,
  Modal,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {Linking} from 'react-native';
import HomePageSearch from '../components/HomePagesearch';
import PetProfile from '../components/PetProfile';
import {SliderBox} from 'react-native-image-slider-box';
import DetailPage from './DetailPage';
import ProductPage from './productPage';
import {getProducts} from '../services/Products_services';

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
  const[category,setCategory] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);
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
  }
  const ProductCategoryList = async () =>{
    try {
      let res = await axios.get(`http://ec2-43-206-254-199.ap-northeast-1.compute.amazonaws.com/api/v1/category/`)
      console.log('categories',res.data.results)
      setCategory(res.data.results)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.bottomview}>
          <HomePageSearch />
        </View>
      </SafeAreaView>
      {/* main slider */}
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
        />
      </View>
      {/* main slider end */}
      {/* categories */}
      <View style={styles.petsview}>
        <Text style={styles.petstyle}>Select Your Pet</Text>
        <ScrollView horizontal>
          {/* <PetProfile /> */}
          {category && category.map((category, index) =>{
            return (
              // <Text key={index}>{item.name}</Text>
              <PetProfile category={category} />
            )
          })}
        </ScrollView>
      </View>
      {/* categories end */}
      <Text style={{color: '#bfbfbf', width: wp(94), textAlign: 'center'}}>
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
        <View style={styles.horizontalView}>
          {loading ? (
            <ActivityIndicator color="red" size="large" />
          ) : error ? (
            <Text color="red">{error}</Text>
          ) : (
            <FlatList
              data={products}
              // horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => `${item.id}-${item.title}`}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    width: wp(44),
                    marginRight: 12,
                    position: 'relative',
                    borderColor: 'gray',
                    borderWidth: 1,
                  }}>
                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 6,
                      backgroundColor: 'white',
                      borderRadius: 20,
                      padding: 2,
                    }}>
                    <AntDesign name="heart" size={15} color="red" />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => navigate.navigate(ProductPage)}
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
      {/* products end */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    height: hp(20),
    borderColor: 'black',
    paddingTop: 12,
  },
  petstyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
  },
  agentImageStyle: {
    marginRight: wp(10),
    borderRadius: wp(300) / 2,
    overflow: 'hidden',
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
  horizontalView: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: wp(90),
  },
  image: {
    width: wp(35),
    height: hp(15),
    // borderRadius: 15,
    // marginTop: 2,
  },

  containertext: {
    flexDirection: 'row', // Align children in a row
    alignItems: 'center', // Center vertically
    paddingTop: 10,
    paddingBottom: 10,
  },
  titleText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  seeAllText: {
    fontWeight: 'bold',
    width: wp(98),
    textAlign: 'center',
    color: 'black',
  },
  priceText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
  },
});

export default HomePage;
