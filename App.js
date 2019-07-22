import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Home'
import Home2 from './Home2'

const root = createStackNavigator(
  {
    Home : {
      screen : Home
    },
    Home2 : {
      screen : Home2
    }
  },
  {
    initialRouteName : "Home"
  }
)

const AppContainer = createAppContainer(root)

export default class App extends Component{
  
  render(){

    return(
      <AppContainer/> 
    )
  }
}