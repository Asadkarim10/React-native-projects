import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './heading';
import Input from './input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar'

let todoIndex = 0

// ERROR. The Expo team has been notified.
class App extends Component {
  constructor() {
 super()
 this.state = {
 inputValue: '',
 todos: [],
 type: 'All'
 }
 this.setType = this.setType.bind(this)
 this.submitTodo = this.submitTodo.bind(this)
 this.toggleComplete = this.toggleComplete.bind(this) 
 this.deleteTodo = this.deleteTodo.bind(this) 
 }
 
 //delete button 

 deleteTodo (todoIndex) { 
  let { todos } = this.state
  todos = this.state.todos.filter((todo) => { return todo.todoIndex !== todoIndex
  })
  this.setState({ todos })
 } 

// complete button 

 toggleComplete (todoIndex) { 
  let { todos } = this.state
  todos.forEach((todo) => {
  if (todo.todoIndex === todoIndex) {
  todo.complete = !todo.complete
  }
  })
  this.setState({ todos })
 } 


 setType (type) {
  this.setState({ type })
 } 



//setinputvalues 

  inputChange(inputValue) { 
 console.log(' Input Value: ' , inputValue) 
 this.setState({ inputValue }) 
 } 
 
 render() {
  const { inputValue, todos } = this.state
 return (
 <View style={styles.container}>
 <ScrollView
 keyboardShouldPersistTaps="always"
 style={styles.content}>
 <View />
 <Heading />
 <Input
 inputValue={inputValue}
 inputChange={(text) => this.inputChange(text)} />
 <TodoList
 toggleComplete={this.toggleComplete}
 deleteTodo={this.deleteTodo}
 todos={todos} />
 <Button submitTodo={this.submitTodo} />
 </ScrollView>
 <TabBar type={type} setType={this.setType.bind(this)} />

 </View>
 )
 }
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 backgroundColor: '#f5f5f5'
 },
 content: {
 flex: 1,
 paddingTop: 60
 }
})

export default App

