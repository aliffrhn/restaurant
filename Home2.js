import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Home2 extends Component{

    render(){
        
        return(
            <View>
                <Text>
                    Home2
                </Text>
                <Button title="Goto Home" onPress={()=> {this.props.navigation.navigate("Home")} }/>
            </View>
        )
    }
}