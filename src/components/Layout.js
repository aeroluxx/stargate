import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'

const Layout = props => {
  const { screenStyle } = styles
  return (
  <ScrollView>
    <View style={screenStyle}>
      {props.children}
    </View>
  </ScrollView>
  )
}

const styles=StyleSheet.create({
  screenStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150,
    backgroundColor: '#C9DCF2'
    }
  }
)

export {Layout}
