import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { motion } from 'framer-motion';
import { auth, googleProvider } from '../../config/firebase_config';
import { createUserWithEmailAndPassword , signInWithPopup  , signOut} from 'firebase/auth';
import DashBoard from '../DashBoard';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [username, setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL , setPhotoURL] = useState('');

  

  const signIn =  async () => {
         await createUserWithEmailAndPassword(auth, email, password);
  };




  const signInWithGoogle =  async () => {
    try{  

  const result = await signInWithPopup(auth, googleProvider);
         setUsername(result.user.displayName);
          console.log (username); 
          setPhotoURL( result?.user?.photoURL);
        
        }

          catch (error) {
            console.error(error);
          };
  };


  const Logout = async()=> {
    await signOut(auth);
  }

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password );
  }

  const LoginComponent = () => {
    return ( <>



<KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <View style={styles.inputContainer}>


        {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="black"
              onChangeText={(text) => setUsername(text)}

            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />

          {/* Login/Sign Up Button */}


          <TouchableOpacity style={styles.button} onPress={isLogin? signIn : signUp}>
            <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'   }</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={Logout}>
            <Text style={styles.buttonText}>{'Log OUT'}</Text>
          </TouchableOpacity>

          {/* Google Sign-Up Button */}

         
          <Text style={{fontSize:19 , marginTop: 20 , fontWeight:'bold'}}> OR </Text>
          <View style={styles.row_bundler}>
          
          <Image
              source={require('../../assets/images/google-icon.png')}
              style={styles.googleIcon}
            />
            
            

          <TouchableOpacity onPress={signInWithGoogle} > 
            <Text style={styles.googleText}>Sign Up with Google</Text>
          </TouchableOpacity>

          </View>
        </View>

        {/* Toggle between Login and Signup */}
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
          <Text style={styles.toggleText}>
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
          </Text>
        </TouchableOpacity>
      </motion.div>
    </KeyboardAvoidingView>

    </>);
  }
  
  console.log(username);

  return (username? <DashBoard Username ={username} PhotoURL={photoURL} /> : <LoginComponent /> )
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2EFE7',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 380,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
    fontSize: 16,
    color: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: 'green',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,

  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,

  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleText: {
    fontSize: 19,
    color: '#2973B2',
    fontWeight: 'bold',
    
  },
  toggleText: {
    marginTop: 70,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    textDecorationLine: 'underline',
    textDecorationStyle: 'double',
    fontWeight:"700"
  
    
  },

  // utility function ***********************

  row_bundler:{
    flexDirection: 'row',
    marginTop : 20 ,
  }
});


export default LoginSignup;