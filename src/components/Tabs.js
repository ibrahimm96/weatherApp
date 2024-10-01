import React from 'react';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const tabBarActiveColor = '#ff5a5f'; // Coral
const tabBarInactiveColor = '#424242'; // Dark grey
const tabBarBackgroundColor = 'rgba(245, 245, 245, 0.8)'; // Light grey with 80% opacity
const headerBackgroundColor = 'rgba(255, 255, 255, 0.8)'; // White with 80% opacity
const headerTitleColor = '#333333'; // Dark grey
const headerTitleFontSize = 25;

const Tab = createBottomTabNavigator();

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: tabBarActiveColor,
        tabBarInactiveTintColor: tabBarInactiveColor,
        tabBarStyle: {
          backgroundColor: tabBarBackgroundColor,
        },
        headerStyle: {
          backgroundColor: headerBackgroundColor,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: headerTitleFontSize,
          color: headerTitleColor,
        },
        headerTransparent: true, // Make header translucent
      }}  
    >
      <Tab.Screen 
        name={'Current'} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather 
              name={'droplet'} 
              size={25} 
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}         
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>

      <Tab.Screen 
        name={'Upcoming'} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather 
              name={'clock'} 
              size={25} 
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}         
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>

      <Tab.Screen 
        name={'City'} 
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather 
              name={'home'} 
              size={25} 
              color={focused ? 'tomato' : 'black'}
            />
          )
        }}         
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
