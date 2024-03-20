import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfilePage from './ProfilePage';
import {useNavigation} from '@react-navigation/native';
import UserProfileEditPage from './UserProfileEditPage';

const UserProfilePage = () => {
  // Sample user data
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    contactAddress: '123 Main Street, City, Country',
    photo: require('../assets/dog2.jpg'),
    Contact: '03337861942',
  };
  const navigate = useNavigation();


  return (
    <View style={styles.container}>
      <View
        style={{
          width: wp(100),
          shadowOpacity: 0.3,
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
      </View>
      <Image source={user.photo} style={styles.photo} />
      <View style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{user.name}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{user.email}</Text>
        <Text style={styles.label}>Contact:</Text>
        <Text style={styles.text}>{user.Contact}</Text>
        <Text style={styles.label}>Address:</Text>
        <Text style={styles.text}>{user.contactAddress}</Text>
      </View>
      <View style={styles.BtnVerifedagent}>
        <TouchableOpacity
          style={styles.verifedagent}
          onPress={() => {
            // addToCartHandler(product);
          }}>
          <Text style={styles.verfiedagenttext} onPress={()=> navigate.navigate(UserProfileEditPage)}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    marginBottom: 10,
    color: 'black',
  },
  BtnVerifedagent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifedagent: {
    backgroundColor: '#0e4183',
    borderWidth: 0.5,
    borderRadius: 12,
    width: wp(70),
    height: hp(6),
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verfiedagenttext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  header: {
    height: hp(6),
  },
});

export default UserProfilePage;
