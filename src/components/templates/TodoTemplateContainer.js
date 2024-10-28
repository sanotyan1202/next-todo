import { PrismaClient } from '@prisma/client'
import TodoTemplate from '@/components/templates/TodoTemplate'

const prisma = new PrismaClient()

export default async function TodoTemplateContainer() {
  const todos = await prisma.todo.findMany()

  return (
    <TodoTemplate todos={todos} />
  )
}