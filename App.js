import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './Menu/Home/Home'

const root = createStackNavigator(
  {
    Home : {
      screen : Home
    },
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