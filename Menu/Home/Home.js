import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Footers from '../Footers'

export default class Home extends Component{

    render(){
        
        return(
            <View style={{flex : 1}}>
                <View style={{flex : 1}}>  
                    <Text>
                        Home
                    </Text>
                </View>
                <Footers/>
            </View>
        )
    }
}