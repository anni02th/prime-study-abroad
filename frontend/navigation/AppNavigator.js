import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import StudentProfileScreen from '../screens/StudentProfileScreen';
import ManageStudentsScreen from '../screens/ManageStudentsScreen';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerStyle: { backgroundColor: '#1e293b', width: 240 },
        sceneContainerStyle: { backgroundColor: '#f1f5f9' }
      }}
    >
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="ManageStudents" component={ManageStudentsScreen} />
      <Drawer.Screen name="StudentProfile" component={StudentProfileScreen} />
    </Drawer.Navigator>
  );
}
