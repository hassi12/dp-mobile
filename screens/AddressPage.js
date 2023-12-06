import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CheckoutPage from './CheckoutPage';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddressPage = () => {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
       <AntDesign
              name="left"
              size={25}
              onPress={() => navigate.navigate(CheckoutPage)}
            />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Address</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Country</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your country"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Province</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your province"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>District</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your district"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          placeholderTextColor="#888"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nearby Famous Place</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your text"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.verifedagent}>
            <TouchableOpacity>
              <Text
                style={styles.verfiedagenttext}
                onPress={() => navigate.navigate(CheckoutPage)}>
                SAVE
              </Text>
            </TouchableOpacity>
          </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: '#555',
  },
  input: {
    height: 50,
    borderColor: '#3498db',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 18,
    color: '#2c3e50',
    backgroundColor: '#ecf0f1',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  verifedagent: {
    marginTop: 20,
    backgroundColor: '#00599D',
    borderWidth: 0.5,
    borderRadius: 20,
    width: wp(60),
    height: hp(6),
    marginLeft: wp(15),
  },
  verfiedagenttext: {
    marginTop: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default AddressPage;
