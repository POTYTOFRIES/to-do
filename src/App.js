import React from 'react';
import Edit from './components/Edit';
import './App.css';
import Header from './components/Header';
import { TodoForm } from './components/TodoForm';



function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <div className='todos'>
        <TodoForm />
        <Edit />
      </div>
    </div>
  );
}

export default App;
