import React,{ useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
// import UserProfilePage from './UserProfilePage';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { userUpdate } from '../services/User_services';

const UserProfileEditPage = () => {
const navigate = useNavigation();
const userToken = useSelector((state) => state.user.token);
const user = useSelector(state => state.user);

const [username, setUsername] = useState(user?.user?.username);
const [firstname, setFirstname] = useState(user?.user?.first_name);
const [Lastname, setLastname] = useState(user?.user?.last_name);
const [email, setEmailname] = useState(user?.user?.email);
const [phone, setPhone] = useState(user?.user?.phone_number);
const [city, setCity] = useState(user?.user?.city);
const [Country, setCountry] = useState(user?.user?.country);
const [dob, setDob] = useState(user?.user?.dob || "")

let headers = {};
if (userToken) {
  headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${userToken}`,
  };
}
const UpdateProfile = async () => {
  // e.preventDefault();
  const payload = {
    first_name: firstname,
    last_name: Lastname,
    phone_number: phone,
    username: username,
    email: email,
    dob: dob,
    city: city,
    country: Country,
  };
  try {
    let result = await userUpdate(payload, headers);
    console.log("result", result);
    Toast.show({
      type: 'success',
      text1: 'Your Profile',
      text2: 'profile Update Successfully!',
      visibilityTime: 3000,
      color: 'green',
    });
    setUsername('');
    setFirstname('');
    setLastname('');
    setEmailname('');
    setPhone('');
    setCity('');
    setCountry('');
  } catch (error) {
    console.log("error", error);
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
            onPress={() => navigate.navigate('UserProfilePage')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 100,
            marginTop: 10,
          }}>
          Edit User Profile
        </Text>
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            placeholderTextColor="#888"
            value={firstname}
            onChangeText={text => setFirstname(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            placeholderTextColor="#888"
            value={Lastname}
            onChangeText={text => setLastname(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your User Name"
            placeholderTextColor="#888"
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={text => setEmailname(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Phone Number"
            placeholderTextColor="#888"
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>City</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your city"
            placeholderTextColor="#888"
            value={city}
            onChangeText={text => setCity(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Country</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Country"
            placeholderTextColor="#888"
            value={Country}
            onChangeText={text => setCountry(text)}
          />
        </View>

        <View style={styles.verifedagent}>
          <TouchableOpacity>
            <Text
              style={styles.verfiedagenttext}
              onPress={UpdateProfile}>
              Update Profile
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
    height: hp(77),
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
});

export default UserProfileEditPage;
