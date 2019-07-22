import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Home extends Component{

    render(){
        
        return(
            <View>
                <Text>
                    Home
                </Text>
                <Button title="Goto Home2" onPress={()=> {this.props.navigation.navigate("Home2")}}/>
            </View>
        )
    }
}