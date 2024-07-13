"use client"

import { useState } from "react"
import { DndContext } from "@dnd-kit/core"
import { SortableContext } from "@dnd-kit/sortable"
import UserList from "@/components/UserList"

const ReorderPage = () => {
  const [items, setItems] = useState([
    { id: "item1" },
    { id: "item2" },
    { id: "item3" },
  ])

  return (
    <UserList />
    // <div className="mx-4 mt-4">
    //   <h1 className="text-3xl font-bold text-center">Reorder List Page</h1>
    //   <h3>Drag items from one list to the other</h3>
    //   <DndContext>
    //     <SortableContext items={items}>
    //       {items.map((item) => (
    //         <div key={item.id}>{item.id}</div>
    //       ))}
    //     </SortableContext>
    //   </DndContext>
    // </div>
  )
}

export default ReorderPage
