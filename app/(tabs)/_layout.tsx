import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
  const {t}=useTranslation()
  return (
    <Tabs screenOptions={{tabBarStyle:{backgroundColor:'rgba(19, 76, 181, 1)'},tabBarActiveTintColor:'white',tabBarInactiveTintColor:'#848482'}} >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: `${t('Home')}`,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="weather"
        options={{
          headerShown: false,
          tabBarLabel: `${t('Weather')}`,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cloud-outline" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
