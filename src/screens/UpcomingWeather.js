import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, StatusBar, ImageBackground } from 'react-native';
import ListItem from '../components/ListItem';

const UpcomingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const { container, imageBackground } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={imageBackground}
        resizeMode="cover"
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          contentContainerStyle={styles.flatListContent}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'transparent', // Set background color to transparent
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    paddingTop: 40,
  },
  flatListContent: {
    paddingBottom: 20,
  },
});

export default UpcomingWeather;
