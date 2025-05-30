import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';

export default function ManageStudentsScreen({ navigation }) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header onMenuPress={() => navigation.openDrawer()} />
      <ScrollView className="p-4">
        <Text className="text-xl font-bold mb-4">Manage Students</Text>
        <TouchableOpacity className="bg-blue-700 px-4 py-2 rounded mb-4 self-start">
          <Text className="text-white font-semibold">+ Register Student</Text>
        </TouchableOpacity>
        <TextInput placeholder="Search by keyword" className="bg-white border border-gray-300 rounded px-4 py-2 mb-3" />
        <View className="flex-row flex-wrap mb-3">
          <TextInput placeholder="All Dates" className="bg-white border border-gray-300 rounded px-2 py-1 w-1/5 mr-2 mb-2" />
          <TextInput placeholder="All Countries" className="bg-white border border-gray-300 rounded px-2 py-1 w-1/5 mr-2 mb-2" />
          <TextInput placeholder="All Intakes" className="bg-white border border-gray-300 rounded px-2 py-1 w-1/5 mr-2 mb-2" />
          <TextInput placeholder="All Years" className="bg-white border border-gray-300 rounded px-2 py-1 w-1/5 mr-2 mb-2" />
          <TextInput placeholder="All Statuses" className="bg-white border border-gray-300 rounded px-2 py-1 w-1/5 mb-2" />
        </View>
        {/* Student Card Example */}
        <View className="bg-white rounded-xl p-4 mb-4 shadow">
          <View className="items-center mb-3">
            <View className="w-16 h-16 rounded-full bg-gray-200 mb-2" />
            <Text className="font-bold text-lg">Pratik Arun Kadam</Text>
            <Text className="text-gray-500">GPA: /10</Text>
            <Text className="text-gray-600 text-xs">pratikkadam218@g...  9860005259</Text>
          </View>
          <Text className="font-semibold mb-2">Applications</Text>
          <View className="flex-row items-center justify-between bg-gray-50 rounded p-2 mb-2">
            <View>
              <Text className="font-semibold">Kedge Business school</Text>
              <Text className="text-xs text-gray-500">MSc - Wine & Hospitality</Text>
            </View>
            <Text className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">Pending</Text>
          </View>
          <View className="flex-row justify-between mt-2">
            <TouchableOpacity>
              <Text className="text-blue-600">View Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-green-600">+ New Application</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
