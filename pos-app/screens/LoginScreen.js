import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'; // 👈 THIS LINE IS VERY IMPORTANT

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '1234') {
      Alert.alert('Login Successful', 'Welcome to POS!');
      // Example: navigation.navigate('OpenRegisterScreen');
    } else {
      Alert.alert('Login Failed', 'Incorrect username or password.');
    }
  };

  return (
    <View style={styles.desktop}>
      <View style={styles.div}>
        <View style={styles.overlap}>
          <View style={styles.ellipse} />
          <Text style={styles.textWrapper}>SR</Text>
        </View>

        {/* Login Form */}
        <View style={styles.loginForm}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  // Your StyleSheet.create() here (already sent)
});
