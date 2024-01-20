import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SignUp from './SignUp';
import {useNavigation} from '@react-navigation/native';
import {signInUser} from '../store/authSlice';
import {useDispatch, useSelector} from 'react-redux';
import BottomTab from '../components/BottomTab';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfilePage from './ProfilePage';
import Tabs from '../tabs/tabs';

const SignIn = () => {
  const handleBackPress = () => {
    navigate.navigate('Tabs');
  };

  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.user);

  const handleSignIn = async () => {
    // Use navigate.navigate with the screen name as a string
    // navigate.navigate(ProfilePage);

    try {
      const loginData = await dispatch(signInUser({username, password}));
      if (loginData.payload && loginData.payload.user) {
        navigate.navigate('Tabs');
        setUsername('');
        setPassword('');
      } else {
        console.log('error name and password');
      }
    } catch (error) {
      console.log('error');
    }
  };
  const handleFacebookLogin = () => {
    // Open the Facebook login page using Linking
    Linking.openURL('https://www.facebook.com/login');
  };

  return (
    <View style={styles.mainview}>
      <View>
        <TouchableOpacity>
          <AntDesign
            name="left"
            style={{
              fontSize: 30,
              color: 'black',
              marginTop: 5,
            }}
            onPress={handleBackPress}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.welcome}>Welcome </Text>
        <Text style={styles.signIn}>Sign in </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>UserName</Text>
        <TextInput
          placeholder="Enter your username"
          placeholderTextColor="#808080"
          style={styles.input}
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#808080"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.icon}>
          <Icon name="facebook" size={30} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="envelope" size={30} color="#e74c3c" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Icon name="instagram" size={30} color="#c82f7c" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigate.navigate(SignUp)}>
        <Text style={{textAlign: 'center', marginTop: 25}}>sign up now</Text>
      </TouchableOpacity>
      {/* <View style={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <BottomTab />
      </View> */}
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
  
    padding: 20,
  },
  welcome: {
    fontSize: 15,
    marginTop: 25,
  },
  signIn: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  inputContainer: {
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#c0c0c0',
    marginBottom: 20,
    fontSize: 16,
    color: '#000000',
  },
  signInButton: {
    backgroundColor: '#0e4183',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  icon: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 20,
  },
});
