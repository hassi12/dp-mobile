import React,{ useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { CreateAddress } from '../services/Address_services';
import Toast from 'react-native-toast-message';
import {Picker} from '@react-native-picker/picker';

const UserAddAddressPage = () => {
  const navigate = useNavigation();

  const [phone_number, setPhone_number] = useState("");
  const [email_address, setEmail_address] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState('');
  const userToken = useSelector((state) => state.user.token);

  let headers = {};
  if (userToken) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${userToken}`,
    };
  }
  const addAddress = async () => {
    // e.preventDefault();
    const payload = {
        phone_number: phone_number,
        email_address: email_address,
        address: address,
        province: province,
    }
    try {
        await CreateAddress(payload, headers);
      Toast.show({
        type: 'success',
        text1: 'New Address ',
        text2: 'Added Successfully!',
        visibilityTime: 3000,
        color: 'green',
      });
      setAddress("");
      setEmail_address("");
      setPhone_number("");
      setProvince("");
      navigate.navigate('Tabs')
    // userList();
    } catch (error) {
      console.log("add error", error);
    }
  };

  return (
    <SafeAreaView style={styles.container1}>
      <View
        style={{
          width: wp(100),
          height: 45,
          backgroundColor: 'white',
          borderRadius: 4,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
          borderBottomWidth: 0.2,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{}}>
          <AntDesign
            name="left"
            style={{
              fontSize: 20,
              color: 'black',
              marginTop: 10,
              marginLeft: 10,
            }}
            onPress={() => navigate.navigate('UserAdressPage')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 100,
            marginTop: 10,
          }}>
          Add Address user
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#888"
            value={email_address}
            onChangeText={text => setEmail_address(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Phone Number"
            placeholderTextColor="#888"
            value={phone_number}
            onChangeText={text => setPhone_number(text)}
          />
        </View>
        <View style={{ marginTop: 10 }} >
      <Text style={styles.label}>Select Province</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={province}
          onValueChange={(itemValue) => {
            setProvince(itemValue);
          }}
        >
          <Picker.Item label="Select Your Province" value="" />
          <Picker.Item label="Balochistan" value="Balochistan" />
          <Picker.Item label="Punjab" value="Punjab" />
          <Picker.Item label="Sindh" value="Sindh" />
          <Picker.Item label="KPK" value="KPK" />
        </Picker>
      </View>
    </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
            placeholderTextColor="#888"
            value={address}
            onChangeText={text => setAddress(text)}
          />
        </View>

        <View style={styles.verifedagent}>
          <TouchableOpacity>
            <Text
              style={styles.verfiedagenttext}
              onPress={addAddress}>
              SAVE
            </Text>
          </TouchableOpacity>
        </View>
        <Toast />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  container: {
    borderWidth: 0.1,
    margin: 10,
    backgroundColor: 'white',
    height: hp(60),
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
    marginBottom: 5,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  input: {
    height: 50,
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
    width: wp(88),
    marginLeft: 10,
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
  },
});

export default UserAddAddressPage;
