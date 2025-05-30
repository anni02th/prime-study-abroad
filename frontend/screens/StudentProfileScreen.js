import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';

export default function StudentProfileScreen({ navigation }) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header onMenuPress={() => navigation.openDrawer()} />
      <ScrollView className="p-4">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xl font-bold">Student Profile</Text>
          <TouchableOpacity className="bg-red-600 px-4 py-2 rounded">
            <Text className="text-white font-semibold">Delete Student</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row mb-4">
          <TouchableOpacity className="border-b-2 border-blue-600 px-3 py-2">
            <Text className="font-semibold text-blue-600">Student Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-3 py-2">
            <Text className="font-semibold text-gray-600">Application</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-3 py-2">
            <Text className="font-semibold text-gray-600">Documents</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white rounded-xl p-4 mb-4 shadow">
          <View className="items-center mb-3">
            <View className="w-16 h-16 rounded-full bg-gray-200 mb-2" />
            <Text className="font-bold text-lg">Yash Gupta</Text>
            <Text className="text-gray-500">GPA: /10</Text>
          </View>
          <Text className="text-gray-700 mb-1">Email: yashg666.yg@gmail.com</Text>
          <Text className="text-gray-700 mb-1">Phone: 80875 05770</Text>
          <Text className="text-gray-700 mb-1">Nationality: <Text className="font-semibold">Indian</Text></Text>
          <Text className="text-gray-700 mb-1">Passport:</Text>
          <Text className="mt-3 font-semibold">Change Avatar:</Text>
          <View className="w-12 h-12 rounded-full bg-gray-200 mt-2" />
        </View>
        <View className="bg-white rounded-xl p-4 shadow">
          <Text className="font-bold mb-2">Advisor Notes</Text>
          <Text className="text-gray-500 text-xs">These notes are only visible to advisors and administrators.</Text>
        </View>
      </ScrollView>
    </View>
  );
}
