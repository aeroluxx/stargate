import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Button } from './src/components'


export default class App extends Component {
  _onPress = () => {
    console.log('click')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
          <Button title={'click'} onPress={this._onPress}/>
      </View>
    )
  }
}
