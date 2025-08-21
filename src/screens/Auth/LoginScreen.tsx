import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { useAuthStore } from '../../store/authStore'; // Assuming Zustand or Redux is used for state management

const LoginScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useAuthStore(); // Assuming a function to set user state

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/v1/auth/login', {
        email: emailOrPhone,
        password,
      });
      setUser(response.data.user); // Store user data in state
      Alert.alert('Login Successful', 'Welcome back!');
      // Navigate to the dashboard or main screen
    } catch (error) {
      Alert.alert('Login Failed', error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput
        placeholder="Email or Phone"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
