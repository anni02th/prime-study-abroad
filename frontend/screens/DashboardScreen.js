import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/Header';

export default function DashboardScreen({ navigation }) {
  return (
    <View className="flex-1 bg-gray-100">
      <Header onMenuPress={() => navigation.openDrawer()} />
      <View className="p-4">
        <Text className="text-2xl font-bold">Manage Students</Text>
        {/* You can add ManageStudentsScreen here or navigate to it */}
      </View>
    </View>
  );
}
