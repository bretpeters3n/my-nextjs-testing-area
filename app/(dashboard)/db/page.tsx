// import { createTodo } from "@/utils/api"
// import { useState } from "react"
import { prisma } from "@/utils/db"
// import History from "@/components/History"

import AddTodo from "@/components/AddTodo"
import History from "@/components/History"
import HistoryTitle from "@/components/HistoryTitle"

const getDataUser01 = async () => {
  const content = await prisma.affgroup.findMany({
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
  return content
}

const DbPage = async () => {
  const content = await getDataUser01()
  return (
    <div className="">
      <AddTodo />
      <History data={content} />
    </div>
  )
}
export default DbPage
