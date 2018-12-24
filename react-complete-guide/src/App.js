import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input/Input'
import OutPut from './OutPut/OutPut'
class App extends Component {
 constructor(props){
   super(props);
   this.state ={
    username: 'Aaravi',
    country: 'India'
   }
 }

 changeIUserName = (event)=>{
this.setState({
  username: event.target.value
});
 }
  render() {
    const style = {
      backgroundColor: 'green'
    };
    return (
      <div className="App">
      <Input
      textchange={this.changeIUserName}
      username={this.state.username} 
      />
        <OutPut
          input1='Input text 1 p1'
          input2='Input text 2 p1'
          username={this.state.username} />

        <OutPut
          input1='Input text 1 p2'
          input2='Input text 2 p2'
          username={this.state.username}  />
      </div>
    );
  }
}

export default App;
