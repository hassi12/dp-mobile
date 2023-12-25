import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Tabs from '../tabs/tabs';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import OrderPage from './OrderPage';

const Sucessfullorder = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View></View>
      <TouchableOpacity style={styles.closeButton}>
        <Feather name="x" size={40} onPress={() => navigate.navigate(Tabs)} />
      </TouchableOpacity>
      <View style={{marginBottom: 50}}>
        <Text style={styles.dptext}>DP</Text>

        <Text style={styles.dogtext}>Django Pets</Text>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground>
          <Image
            // source={require('../assets/dog2.jpg')}
            style={[styles.image, styles.firstImage]}
          />

          {/* Thumbs-up Icon */}
          <View style={styles.thumbsUpContainer}>
            <FontAwesome5 name="thumbs-up" size={30} color="white" />
          </View>
        </ImageBackground>
      </View>

      <Text style={styles.successText}>Order Placed Successfully!</Text>
      <Text style={styles.infoText}>
        Thank you for placing your order. We are glad to serve you on your
        journey.
      </Text>

      <TouchableOpacity>
        <Text onPress={() => navigate.navigate(OrderPage)} style={{marginTop: 80, color: 'red', fontSize: 20}}>
          track your order <AntDesign name="arrowright" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: wp(2),
    left: wp(2),
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: wp(20),
    height: wp(20),
    borderRadius: wp(11),
    marginRight: wp(3),
    borderWidth: 2,
    backgroundColor: 'green',
  },

  thumbsUpContainer: {
    position: 'absolute',
    top: '50%',
    left: '45%',
    transform: [{translateX: -15}, {translateY: -15}],
  },

  successText: {
    marginTop: 15,
    fontSize: 15,
    marginBottom: 10,
    fontWeight: '900',
    color: 'black',
    textAlign: 'center',
  },
  infoText: {
    textAlign: 'center',
    width: wp(95),
    marginLeft: 10,
  },
  dptext: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
  },
});

export default Sucessfullorder;
