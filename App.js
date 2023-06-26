import React from 'react'
import MapboxGL from '@react-native-mapbox-gl/maps'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import 'react-native/Libraries/NewAppScreen' // Add this import statement

MapboxGL.setAccessToken('MAPBOX_ACCESS_TOKEN')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapboxGL.MapView style={styles.map} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
})
