import React from 'react'
import InputTodo from './InputTodo'
import TodosList from './TodosList'

const TodosLogic = () => {
  return (
    <div className='todos'>
      <InputTodo />
      <TodosList />
    </div>
  )
}

export default TodosLogic