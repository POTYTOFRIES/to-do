import React from 'react'
import { IoIosAddCircle } from 'react-icons/fa';

export const TodoForm = () => {
  return (
    <form className='TodoForm'>
      <input type="text" className='todo-input'
        placeholder='Add Todo...' />
      
    </form>
  )
}
