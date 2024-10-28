'use client'

import Checkbox from '@/components/atoms/Checkbox'
import Button from '@/components/atoms/Button'

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <tr>
      <td>
        <Checkbox checked={todo.checked} onChange={() => onToggle(todo.id)} />
      </td>
      <td>{todo.content}</td>
      <td>{todo.dueDate}</td>
      <td>
        <Button onClick={() => onDelete(todo.id)}>削除</Button>
      </td>
    </tr>
  )
}