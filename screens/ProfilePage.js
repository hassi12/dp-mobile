import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './SignIn';
import {useNavigation} from '@react-navigation/native';
import OrderPage from './OrderPage';
import AddressList from './AddressList';

const ProfilePage = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require('../assets/profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <TouchableOpacity>
          <Text>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <TouchableOpacity>
          <Text
            style={styles.sectionTitle}
            onPress={() => navigate.navigate(OrderPage)}>
            Order History
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Products</Text>
        {/* Display favorite products here */}
      </View>

      {/* Address Book */}

      <View style={styles.section}>
        <Text
          style={styles.sectionTitle}
          onPress={() => navigate.navigate(AddressList)}>
          Address Book
        </Text>
        {/* Display address book here */}
      </View>

      {/* Pet Information */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pet Information</Text>
        {/* Display pet information here */}
      </View>

      {/* Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Settings</Text>
        {/* Display settings options here */}
      </View>

      {/* Log Out Option */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigate.navigate(SignIn)}>
        <Text style={styles.logoutButtonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  logoutButton: {
    backgroundColor: '#0e4183',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
