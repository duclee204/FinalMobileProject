import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import thư viện icon
import Trangchu from './Trangchu';
import Yeuthich from './Yeuthich';
import Thongbao from './Thongbao';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Trangchu"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Trangchu') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Yeuthich') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Thongbao') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'pink',  // Cấu hình màu cho tab đang được chọn
        tabBarInactiveTintColor: 'gray',  // Cấu hình màu cho tab không được chọn
        tabBarStyle: { backgroundColor: 'white' } // Cấu hình màu nền của thanh tab
      })}
    >
      <Tab.Screen 
        name="Trangchu" 
        component={Trangchu} 
        options={{ 
          tabBarLabel: 'Trang chủ', 
          headerShown: false // Ẩn tiêu đề của màn hình Trangchu
        }} 
      />
      <Tab.Screen 
        name="Yeuthich" 
        component={Yeuthich} 
        options={{ 
          tabBarLabel: 'Yêu thích', 
          headerShown: false // Ẩn tiêu đề của màn hình Yeuthich
        }} 
      />
      <Tab.Screen 
        name="Thongbao" 
        component={Thongbao} 
        options={{ 
          tabBarLabel: 'Thông báo', 
          headerShown: false // Ẩn tiêu đề của màn hình Thongbao
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{ 
          tabBarLabel: 'Profile', 
          headerShown: false // Ẩn tiêu đề của màn hình Profile
        }} 
      />
    </Tab.Navigator>
  );
}
