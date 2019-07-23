import React, { Component } from 'react'
import { View, StatusBar, Image } from 'react-native'
import Footers from '../Footers'
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from 'react-native-image-slider'
import { Text, Content, Card, CardItem, Left, Right, Button } from 'native-base'
import axios from 'axios'

export default class Home extends Component{

    constructor(){
        super();
        this.state = {
            image : [
                'http://placeimg.com/640/480/any',
                'http://placeimg.com/640/480/any',
                'http://placeimg.com/640/480/any'
            ],
            categories : [] 
        }
    }

    getCategory = () =>{
        axios.get('https://developers.zomato.com/api/v2.1/categories', {headers: {'user-key' : '8585456090d478ea810a41f420f5dd5c'}})
        .then(res => {
            // console.log(res.data.categories)
            this.setState({categories : res.data.categories})
        })
    }

    componentDidMount(){
        this.getCategory()
    }

    static navigationOptions = {
        header: null
    }

    render(){
        
        return(
            
            <View style={{flex : 1}}>
                <StatusBar backgroundColor = "#f2994a" />
                <View style={{height : 200}}>  
                    <ImageSlider images={this.state.image} />
                </View>
                <Content>
                    <Content horizontal style={{marginTop:20}}>
                        {this.state.categories.map((data,key)=>{
                            return(
                                <Button rounded key={key} style={{marginLeft : 10}}>
                                    <Text>{data.categories.name}</Text>
                                </Button>
                            )
                        })}
                    </Content>
                    <Card>
                        <CardItem>
                            <Text>
                                Title
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Image style={{height : 200, width : null, flex : 1}} source={{uri : "http://placeimg.com/640/480/any"}} />
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