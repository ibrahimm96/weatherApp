import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import * as Location from 'expo-location'
import { useGetWeather } from './src/hooks/useGetWeather'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(weather, loading, error)
  
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    )
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'blue'} />
    </View>
  )
  
}
const styles= StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
})
export default App
