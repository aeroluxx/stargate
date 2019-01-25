import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { w } from './Constants'

const ImageCard = ({ data }) => {
  const { cover, h1, container, shadow } = styles
  const { image, name } = data
    return (
      <View style={container}>
        <View style={shadow}>
          <Image style={cover} source={{ uri: image }}/>
        </View>
        <Text style={h1}>{name}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    width: w/2
  },
  shadow: {
    shadowColor: 'grey',
    shadowRadius: 15,
    shadowOffset: { width: 5, height: 15},
    shadowOpacity: 0.3,
    elevation: 2
  },
  cover: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    width: w/2.4,
    height: w*0.63,
    borderRadius: 4,
  },
  h1: {
    fontFamily: 'Helvetica-Light',
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 12,
    color: 'black'
  }
})

export { ImageCard }
