import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      navigation.navigate('OpenRegister');
    } else {
      alert('Incorrect username or password.');
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Orange Circle with SR */}
      <View style={styles.circle}>
        <Text style={styles.circleText}>SR</Text>
      </View>

      {/* Username / Password form */}
      <View style={styles.loginBox}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  circle: {
    backgroundColor: '#cd6625',
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  circleText: {
    color: '#ffffff',
    fontSize: 64,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  loginBox: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#d9d9d9',
    borderRadius: 10,
    padding: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#cd6625',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
