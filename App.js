import React, { Component } from 'react';
import { StyleSheet, State,} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, Content, Text, CardItem, Input, Item } from 'native-base';

const Styles = StyleSheet.create({
  input : {
    marginTop: 10,
    marginBottom: 2,
    
  },
  button : {
    marginTop: 10,
    marginBottom: 2,
    flex: 3
  },

  chekbox : {
      marginLeft : 0,
 },
  text : {
    marginLeft : 20,
  }
});

export default class App extends Component {
  constructor(props){
    super(props);
  this.state = {
      userInput : '',
      todolist : [],
      todoList : [],
     

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {

    this.setState({userInput: text });
  }

  handleSubmit = () => {
    const todo = this.state.userInput
    const todos = this.state.todolist
    this.setState({
      todolist : todos.concat(todo),
      userInput : ''
    })
  }

  handleRemove = d => {
    let data = this.state.todolist.splice(d, 1);
    console.log(d);
    this.setState({
      todolist : data
    })
  }

 
  render() {
    const items = this.state.todolist.map(function(item,index){
      return  <Card>
      <CardItem>
      

        <Text style= {Styles.text}>{item}</Text>
        <Right>
           <Button onClick = { item => { this.handleRemove({item})} } ><Text>Hapus</Text></Button> 
        </Right>
       </CardItem>
     </Card>
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
        <Item style= {Styles.inputUser}>
        <Left style = {Styles.button}>
        <Item rounded>
            <Input onChangeText ={this.handleChange} value= {this.state.userInput} placeholder='Write Todo List'/>
          </Item>  
          </Left>
        <Right style = {Styles.input}>
        <Button onPress = {this.handleSubmit} rounded>
            <Text >Submit</Text>
          </Button>
          </Right>
        </Item>
        <Content>
         {items}
        </Content>

      </Container>
    );


  }

 

  
}

