// import { createTodo } from "@/utils/api"
// import { useState } from "react"
import { prisma } from "@/utils/db"
// import History from "@/components/History"

import AddTodo from "@/components/AddTodo"
import UpdateAffGroup from "@/components/UpdateAffGroupTitle"

const getEntry = async (id: number) => {
  const content = await prisma.affgroup.findUnique({
    where: {
      id: id,
    },
    // orderBy: {
    //   id: "asc",
    // },
  })
  return content
}

const DbEntry = async ({ params }) => {
  const content = await getEntry(params.id)

  return (
    <div className="">
      {/* <form onSubmit={handleSubmit}>
        <div className="flex flex-col-2 gap-4">
          <div className="flex flex-col gap-4">
            <input
              className="text-black"
              type="text"
              name="title01"
              id="title01"
              placeholder="Title of group 1"
              value={content.title}
              // onChange={(e) => console.log(e.target.value)}
            />
            {content.id}
            {content.title}
          </div>
        </div>
      </form> */}
      <UpdateAffGroup data={content} />
    </div>
  )
}
export default DbEntry
