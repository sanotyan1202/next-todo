'use client'

import TodoItem from '@/components/molecules/TodoItem'
import { checkTodo, deleteTodo } from '@/actions/todoAction'

export default function TodoList({ todos, setTodos }) {

  // 更新処理
  // 完了チェックボックスが変更されたら完了、未完了を入れ替える
  // チェックボックスが変更されたTODOを特定するため引き数はIDを受け取る
  const toggleTodo = (id) => {
    // チェックボックスが変更されたTODOの完了、未完了を入れ替える
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )
    // Stateのtodosを更新
    setTodos(updatedTodos)
    // TODOの情報を更新
    checkTodo(id)
  }

  // 削除処理
  // どのTODOを削除するのか判定するために引き数にIDを受け取る
  const handleSubmit = (id) => {
    // IDが一致するTODOを除外した新しいtodos（updatedTodos）を作成
    const updatedTodos = todos.filter(todo => todo.id !== id)
    // Stateのtodosを更新
    setTodos(updatedTodos)
    // ローカルストレージの削除
    deleteTodo(id)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>完了</th>
          <th>内容</th>
          <th>期限</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={handleSubmit}
          />
        ))}
      </tbody>
    </table>
  )
}