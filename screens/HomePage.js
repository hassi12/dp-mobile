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
import {Alert, Modal, Pressable} from 'react-native';
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

const HomePage = () => {
  const {height, width} = Dimensions.get('window');

  const navigate = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const images = [
    require('../assets/dog1.jpg'),
    require('../assets/cat1.jpg'),
    require('../assets/birds1.jpg'),
    require('../assets/pets.jpg'),
  ];

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.bottomview}>
          <HomePageSearch />
        </View>
      </SafeAreaView>
      <View style={styles.sliderviewstyle}>
        <SliderBox
          images={images}
          dotColor="white"
          inactiveDotColor="white"
          dotstyle
          circleLoop={true}
          borderRadius={20}
          resizeMode="cover" // Use "cover" to fill the container without distorting
          sliderBoxHeight={hp(25)}
        />
      </View>
      <View style={styles.petsview}>
        <Text style={styles.petstyle}>Select Your Pet</Text>
        <ScrollView horizontal>
          <PetProfile />
        </ScrollView>
      </View>
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
      <View style={styles.container11}>
        <View style={styles.horizontalView}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(48),
              marginRight: 5,
              position: 'relative',
            }}>
            <TouchableOpacity onPress={() => navigate.navigate(ProductPage)}>
              <Image
                source={require('../assets/petfood1.jpg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              onPress={() => navigate.navigate(ProductPage)}
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 30,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View />
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(48),
              marginRight: 5,
            }}>
            <TouchableOpacity onPress={() => navigate.navigate(ProductPage)}>
              <Image
                source={require('../assets/petfood2.jpeg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              onPress={() => navigate.navigate(ProductPage)}
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 30,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{padding: 5}}></View>
      <View style={styles.container11}>
        <View style={styles.horizontalView}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(48),
              marginRight: 5,
              position: 'relative',
            }}>
            <TouchableOpacity onPress={() => navigate.navigate(ProductPage)}>
              <Image
                source={require('../assets/petfood1.jpg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              onPress={() => navigate.navigate(ProductPage)}
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 30,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
          <View />
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 20,
              width: wp(48),
              marginRight: 5,
            }}>
            <TouchableOpacity onPress={() => navigate.navigate(ProductPage)}>
              <Image
                source={require('../assets/petfood2.jpeg')}
                style={styles.image}
              />
            </TouchableOpacity>
            <Text style={styles.priceText}>Pedigree Vital</Text>
            <Text style={{paddingLeft: 15, fontSize: 13}}>
              Beef & Vegetables
            </Text>
            <Text style={styles.priceText}>Rs. 230</Text>
            <TouchableOpacity
              onPress={() => navigate.navigate(ProductPage)}
              style={{
                position: 'absolute',
                bottom: 5,
                right: 5,
                backgroundColor: '#eb2d1c',
                borderRadius: 20,
                padding: 10,
              }}>
              <AntDesign name="plus" size={25} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
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
    paddingTop: 15,
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
    height: hp(25),
    width: wp(95),
    borderRadius: 15, // Add this line to set the border radius
    overflow: 'hidden',
  },
  container11: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalView: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    width: wp(97),
  },
  image: {
    width: wp(40),
    height: hp(25),
    margin: 5, // Optional: Add margin between images
    borderRadius: 15,
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
  },
  seeAllText: {
    fontWeight: 'normal',
    paddingLeft: 160,
    width: wp(98),
  },
});

export default HomePage;
