import React, {Component} from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'
import { Header, ImageCard } from './src/components'
import { w, h } from './src/components/Constants'

const url='https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'

export default class App extends Component {

  state={
    title: 'STARGATE',
    data: []
  }

  componentDidMount = async() => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    }
    catch (e) {
      throw e
    }
  }

  render() {
    const {title, data} = this.state
    const {screenStyle} = styles
    return (
        <View>
          <ScrollView>
            <Header title={this.state.title}/>
              <View style={screenStyle}>
                {data.map( item => (
                  <ImageCard data={item} key = {item.id} />
                ))}
              </View>
            </ScrollView>
        </View>
    )
  }
}

const styles=StyleSheet.create({
  screenStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 100
    }
  }
)
