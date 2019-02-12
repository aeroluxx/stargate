import { createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screen1/HomeScreen'
import DetailScreen from './src/screen1/DetailScreen'

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Detail: { screen: DetailScreen }
})

export default AppNavigator
