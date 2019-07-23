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
            categories : [],
            restaurant : []
        }
    }

    // Function
    getDataCategory = () =>{
        axios.get('https://developers.zomato.com/api/v2.1/categories', {headers: {'user-key' : '8585456090d478ea810a41f420f5dd5c'}})
        .then(res => {
            // console.log(res.data.categories)
            this.setState({categories : res.data.categories})
        })
    }
    
    getDataRestaurant = () =>{
        axios.get('https://developers.zomato.com/api/v2.1/search?start=6&sort=rating', {headers: {'user-key' : '8585456090d478ea810a41f420f5dd5c'}})
        .then(res => {
            // console.log(res.data.restaurants)
            this.setState({restaurant : res.data.restaurants})
        })
    }
    
    componentDidMount(){
        this.getDataCategory()
        this.getDataRestaurant()
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
                    {this.state.restaurant.map((data,key)=>{
                        
                        var image = ""
                        if(data.restaurant.featured_image === ""){
                            image = 'http://placeimg.com/640/480/any'
                        }else{
                            image = data.restaurant.featured_image
                        }

                        return(
                            <Card key={key}>
                                <CardItem>
                                    <Text>
                                        {data.restaurant.name}
                                    </Text>
                                </CardItem>
                                <CardItem>
                                    {console.log(data.restaurant)}
                                    <Image style={{height : 200, width : null, flex : 1}} source={{uri : image}} />
                                </CardItem>
                                <CardItem>
                                    <Left>
                                        <Ionicons name='md-star' size={30} color={'#f2994a'} />
                                        <Text>
                                            {/* {console.log(data.restaurant.user_dating.aggregate_rating)} */}
                                            {data.restaurant.user_rating.aggregate_rating}
                                        </Text>
                                    </Left>
                                    <Right>
                                        <Text>
                                            Like
                                        </Text>
                                    </Right>
                                </CardItem>
                            </Card>
                        ) 
                    })}
                </Content>
                <Footers/>
            </View>
        )
    }
}