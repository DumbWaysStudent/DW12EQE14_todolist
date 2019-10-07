import React, { Component } from 'react';
import { StyleSheet, State, ImageBackground,} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Card, Content, Text, CardItem, Input, Item, View } from 'native-base';

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
  },

  btn_edit : {
   marginLeft: 5,
   backgroundColor: 'blue',
    
  },

  button_b : {
    flexDirection : 'row',
    marginLeft: 180,
    
  },
});

export default class App extends Component {
  constructor(props){
    super(props);
  this.state = {
      userInput : '',
      todolist : [],
      d : [],
      b : 'Submit',
      id : ''
      
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

  handleRemove = (d) => {
     this.state.todolist.splice(d,1);
    this.setState({
      todolist : this.state.todolist,
    });
   
  }


  handleEdit = (e) => {
    let d = this.state.todolist;
    let value = d[e];
    this.setState({
      userInput : value,
      b : 'Edit',
      id : e,
      
    })
  }

  handleSubmitEdit = (f) => {
    
    const todo = this.state.userInput;
    const b = this.state.todolist.splice(f,1,todo);
    console.log(b);
    this.setState({
      todolist = todos.concat(todo),
      userInput = ''
    })  
  }


  render() {
    const items = this.state.todolist.map((item,index) =>{
      return  <Card>
      <CardItem>
    
        <Text style= {Styles.text}>{item}</Text>
        
          <View style={Styles.button_b}>
          
            <Button style={Styles.btn_remove} icon danger rounded onPress={()=> this.handleRemove(index)}>
            <Icon name='trash'  />
            </Button>
           
           
            <Button style={Styles.btn_edit} icon primary rounded onPress={()=> this.handleEdit(index)}>
            <Icon name='home'  />
          </Button>
       
          </View>
      
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
        <Button onPress = {this.state.b == 'Submit' ? this.handleSubmit : this.handleSubmitEdit(this.state.id) }
           rounded>
            <Text >{this.state.b}</Text>
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

