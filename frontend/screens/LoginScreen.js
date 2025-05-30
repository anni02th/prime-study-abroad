import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-6">
      <Text className="text-2xl font-bold mb-2">PRIME Study Abroad</Text>
      <Text className="text-gray-600 mb-6">Sign in to your account</Text>
      <TextInput
        placeholder="Email address"
        className="w-full bg-white border border-gray-300 rounded px-4 py-3 mb-3"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="w-full bg-white border border-gray-300 rounded px-4 py-3 mb-3"
        value={password}
        onChangeText={setPassword}
      />
      <View className="flex-row w-full justify-between items-center mb-4">
        <View className="flex-row items-center">
          <View className="w-4 h-4 border border-gray-400 rounded mr-2 bg-white" />
          <Text className="text-gray-700">Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-blue-600">Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="w-full bg-blue-600 py-3 rounded" onPress={() => navigation.navigate('Dashboard')}>
        <Text className="text-white text-center font-semibold">Sign in</Text>
      </TouchableOpacity>
    </View>
  );
}
