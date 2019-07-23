import React, { Component } from 'react'
import { View, Text, StatusBar, Image } from 'react-native'
import Footers from '../Footers'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from 'react-native-image-slider'
import { Content, Card, CardItem, Left, Right } from 'native-base'

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

    static navigationOptions = {
        header: null
    }

    render(){
        
        return(
            <View style={{flex : 1}}>
                <StatusBar backgroundColor = "#f2994a" />
                <View style={{flex : 1}}>  
                    <ImageSlider images={this.state.image} />
                    <Text>
                        Home
                    </Text>
                </View>
                <Content>
                    <Card>
                        <CardItem>
                            <Text>
                                Title
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Image style={{height : 200}} source={{uri : "http://placeimg.com/640/480/any"}} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Ionicons name='md-star' size={30} color={'#f2994a'} />
                            </Left>
                            <Right>
                                <Text>
                                    Like
                                </Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
                <Footers/>
            </View>
        )
    }
}