import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

const Button = ({ title, onPress }) => {
  const { container, h1 } = styles
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={container}>
          <Text style={h1}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B50D4',
    marginLeft: 25,
    marginRight: 25,
    height: 60,
    borderRadius: 4,
    shadowColor: '#2B50D4',
    shadowRadius: 8,
    shadowOffset: { width: 5, height: 5},
    shadowOpacity: 0.4,
    elevation: 2
  },
  h1: {
    fontSize: 13,
    color: 'white'
  }
})

export { Button }
