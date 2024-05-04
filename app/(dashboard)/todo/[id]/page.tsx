// import { createTodo } from "@/utils/api"
// import { useState } from "react"
import { prisma } from "@/utils/db"
// import History from "@/components/History"

import AddTodo from "@/components/AddTodo"
import UpdateTodo from "@/components/UpdateTodo"

const getEntry = async (id: number) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: Number(id),
    },
    // orderBy: {
    //   id: "asc",
    // },
  })
  return todo
}

const TodoEntry = async ({ params }) => {
  const todo = await getEntry(params.id)
  // const todo = await getEntry()
  return (
    <div className="">
      {/* <AddTodo /> */}
      {todo ? <div className="">Update your todo:</div> : "No todo to update"}
      <UpdateTodo data={todo} />
    </div>
  )
}
export default TodoEntry
