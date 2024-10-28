'use client'

import { useState } from 'react'
import TodoForm from '@/components/organisms/TodoForm'
import TodoList from '@/components/organisms/TodoList'
import { saveTodo } from '@/actions/todoAction'

export default function TodoTemplate({ todos }) {

  const [todosState, setTodosState] = useState(todos)

  // 追加処理
  // 引き数に新規TODOを受け取る
  const addTodo = (newTodo) => {
    // 新規TODOをtodosに追加
    const updatedTodos = [...todos, newTodo]
    // Stateのtodosを更新
    setTodosState(updatedTodos)
    // ローカルストレージのTODO一覧を更新
    saveTodo(newTodo)
  }

  return (
    <div>
      <h1>TODOアプリ</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todosState} setTodos={setTodosState} />
    </div>
  )
}