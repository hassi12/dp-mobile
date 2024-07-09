import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library
// import ProfilePage from './ProfilePage';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {signUpUser} from '../store/authSlice';

const SignUp = () => {
  const navigation = useNavigation();
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [phone_number, setPhone_Number] = useState('');
  const [confirm_password, setConfirm_Password] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const registerResp = await dispatch(
        signUpUser({
          first_name,
          last_name,
          phone_number,
          username,
          email,
          password,
          confirm_password,
        }),
      );
      setLoading(false);

      if (registerResp.payload && registerResp.payload.user) {
        setFirst_Name('');
        setLast_Name('');
        setUserName('');
        setPhone_Number('');
        setEmail('');
        setPassword('');
        setConfirm_Password('');
        Toast.show({
          type: 'success',
          text1: 'Sign Up',
          text2: 'Sign Up successfully 👋',
          visibilityTime: 2000,
          color: 'green',
        });
        navigation.navigate('SignIn');
      } else {
        let error_message = '';
        if (registerResp.payload.username) {
          error_message = registerResp.payload.username[0];
        }
        if (registerResp.payload.password) {
          error_message = registerResp.payload.password[0];
        }
        if (registerResp.payload.non_field_errors) {
          error_message = registerResp.payload.non_field_errors[0];
        }

        console.log('error', error_message);
        // alert("Your file is being uploaded!",error_message)
        const error = error_message || 'An unexpected error occurred.';
        console.log('error_message', error);
        Toast.show({
          type: 'error',
          text1: 'Signup Failed',
          text2: `${error}`,
          visibilityTime: 3000,
          color: 'red',
        });
      }
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Signup Failed',
        text2: 'An unexpected error occurred.',
        visibilityTime: 3000,
        color: 'red',
      });
    }
  };

  return (
    <View style={styles.mainview}>
      <ScrollView>
        
        <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.signIn}>Sign Up</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>FirstName</Text>
          <TextInput
            placeholder="Enter your FirstName"
            placeholderTextColor="#808080"
            style={styles.input}
            value={first_name}
            onChangeText={text => setFirst_Name(text)}
          />
          <Text style={styles.label}>LastName</Text>
          <TextInput
            placeholder="Enter your LastName"
            placeholderTextColor="#808080"
            style={styles.input}
            value={last_name}
            onChangeText={text => setLast_Name(text)}
          />
          <Text style={styles.label}>UserName</Text>
          <TextInput
            placeholder="Enter your UserName"
            placeholderTextColor="#808080"
            style={styles.input}
            value={username}
            onChangeText={text => setUserName(text)}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="#808080"
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.label}>Number</Text>
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#808080"
            style={styles.input}
            value={phone_number}
            onChangeText={text => setPhone_Number(text)}
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
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            placeholder="Enter your Confirm password"
            placeholderTextColor="#808080"
            secureTextEntry
            style={styles.input}
            value={confirm_password}
            onChangeText={text => setConfirm_Password(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={handleSignUp}
          disabled={loading}>
          <Text style={styles.signInButtonText}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{textAlign: 'center', marginTop: 25, marginBottom: 55}}>
            Login now
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <Toast />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Light blue background color
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
    backgroundColor: 'blue',
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
