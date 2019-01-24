import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { Header } from './src/components'


export default class App extends Component {

  state={
    title: 'STARGATE'
  }

  render() {
    return (
      <View>
          <Header title={this.state.title}/>
      </View>
    )
  }
}
