import React, { useState } from 'react'
import CheckboxList from '../components/CheckboxList'

export default function ToDo() {

    const [list, setList] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault()
        const todo = event.target.todo.value
        setList(list.concat([todo]))
    }  

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input placeholder='Enter Todo' name='todo'/>
            <button type='submit'>Add</button>
        </form>
        <CheckboxList list={list} setList={setList} />
    </div>
  )
}
