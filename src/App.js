import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with husband',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  //delete Todo
  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: 4, 
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }
  render() {
    return (
     <div className="App">
       <div className = "container">
       <Header />
       <AddTodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
     </div>//I am on 1:13:54 React JS Crash Course
    );
  }
}

export default App;
