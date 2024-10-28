"use server"

import { PrismaClient  } from "@prisma/client"

const prisma = new PrismaClient()

export async function saveTodo(todo) {
  return await prisma.todo.create({
    data: {
      id: todo.id,
      content: todo.content,
      dueDate: todo.dueDate,
      checked: todo.checked,
    }
  })
}

export async function checkTodo(id) {
  return await prisma.todo.update({
    where: { id: id },
    data: {
      checked: {
        set: !await prisma.todo.findUnique({
          where: { id: id },
          select: { checked: true },
        }).checked
      }
    }
  })
}

export async function deleteTodo(id) {
  await prisma.todo.delete({
    where: {id: id}
  })
}