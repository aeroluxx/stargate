import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, ImageCard, Layout } from './src/components'
import { w, h } from './src/components/Constants'

const url =
  'https://raw.githubusercontent.com/react-native-village/react-native-init/master/stargate/stargate.json'

export default class App extends Component {
  state = {
    title: 'STARGATE',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  render() {
    const { data } = this.state
    return (
      <View>
        <Header title={this.state.title} />
        <Layout>
          {data.map(item => (
            <ImageCard data={item} key={item.id} />
          ))}
        </Layout>
      </View>
    )
  }
}
