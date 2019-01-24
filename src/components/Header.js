import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  const { headerStyle, h1 } = styles
    return (
        <View style={headerStyle}>
          <Text style={h1}>STARGATE</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  headerStyle: {
    paddingLeft: 10,
    paddingBottom: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundColor: '#2B50D4',
    height: 116,
    shadowColor: '#2B50D4',
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5},
    shadowOpacity: 0.4,
    elevation: 2
  },
  h1: {
    fontFamily: 'Didot-Bold',
    fontSize: 25,
    color: 'white'
  }
})

export { Header }
