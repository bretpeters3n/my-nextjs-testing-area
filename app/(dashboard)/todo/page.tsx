// import { createTodo } from "@/utils/api"
// import { useState } from "react"
import { prisma } from "@/utils/db"
// import History from "@/components/History"

import AddTodo from "@/components/AddTodo"
import History from "@/components/History"

const getData = async () => {
  const todos = await prisma.todo.findMany({
    // where: {
    //   NOT: {
    //     title: {
    //       contains: "Hardcoded db entry" /* Optional filter */,
    //     },
    //   },
    // },
    orderBy: {
      id: "asc",
    },
  })
  return todos
}

const ToDoPage = async () => {
  const todos = await getData()
  return (
    <div className="">
      <AddTodo />
      <History data={todos} />
    </div>
  )
}
export default ToDoPage
