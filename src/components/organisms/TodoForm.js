'use client'

import { useState } from 'react'
import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'

export default function TodoForm({ addTodo }) {
  const [content, setContent] = useState('')
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = () => {
    // ストレージに登録するTODOを生成
    const newTodo = {
      id: Date.now(),   // 重複しないIDを生成（削除、更新時に一意にTODOを特定するため）
      content,          // TODO内容
      dueDate,          // 期限
      checked: false,   // 完了（登録時はfalse）
    }

    //  親（TODOTemplate）から受け取ったaddTodoで、
    //  1. Stateのtodosに新規TODOを追加
    //  2. ローカルストレージに新規TODOを追加
    //  を行う
    addTodo(newTodo)

    // 入力内容を空にする
    setContent('')
    setDueDate('')
  }

  return (
    <div>
      <Input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="TODO内容"
      />
      <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        placeholder="期限"
      />
      <Button onClick={handleSubmit}>追加</Button>
    </div>
  )
}