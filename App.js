import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, Content, Text, CardItem } from 'native-base';
export default class HeaderExample extends Component {

  

  render() {
  const  activity = ['work', 'swim', 'study', 'sleep', 'run'];
  const activities = activity.map(function(item){
    return(  <Card>
      <CardItem>

        <Text> {item} </Text>
       
       </CardItem>
     </Card> )
       
      
      });

    return (
      <Container>
        <Header>
    
          <Body>
            <Title>Todo List</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>

        <Content>
         {activities}
          
        </Content>

      </Container>
    );
  }
}