import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'

const Tab = createBottomTabNavigator();

export default function App() {
  return (    
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Profile" component={ProfilePage} />        
      </Tab.Navigator>
    </NavigationContainer>    
  );
}