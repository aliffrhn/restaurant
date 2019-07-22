import React, { Component } from 'react'
import { Footer, FooterTab, Button, Text, Icon } from 'native-base'

export default class Footers extends Component{

    render(){
        return(
            <Footer>
                <FooterTab>
                    <Button>
                        <Text>Home</Text>
                    </Button>
                    <Button>
                        <Text>Food</Text>
                    </Button>
                    <Button active>
                        <Text>City</Text>
                    </Button>
                    <Button>
                        <Text>Category</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}