import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Footers from '../Footers'

import ImageSlider from 'react-native-image-slider'

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            image : [
                'http://placeimg.com/640/480/any',
                'http://placeimg.com/640/480/any',
                'http://placeimg.com/640/480/any'
            ] 
        }
    }
    render(){
        
        return(
            <View style={{flex : 1}}>
                <View style={{flex : 1}}>  
                    <ImageSlider images={this.state.image} />
                    <Text>
                        Home
                    </Text>
                </View>
                <Footers/>
            </View>
        )
    }
}