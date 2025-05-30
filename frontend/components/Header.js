import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function Header({ onMenuPress }) {
  return (
    <View className="flex-row items-center justify-between bg-gray-900 px-4 py-3">
      <TouchableOpacity onPress={onMenuPress}>
        <Text className="text-white text-2xl font-bold">☰</Text>
      </TouchableOpacity>
      <Text className="text-white text-lg font-bold">PRIME Study Abroad</Text>
      <Image
        source={require('../assets/avatar.png')}
        className="w-8 h-8 rounded-full"
      />
    </View>
  );
}
