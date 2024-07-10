"use client"

import { useState } from "react"
import { List } from "@/components//List"

const ReorderPage = () => {
  const [itemsVertical, setItemsVertical] = useState([
    { id: "item1" },
    { id: "item2" },
    { id: "item3" },
  ])
  const [itemsHorizontal, setItemsHorizontal] = useState([
    { id: "item4" },
    { id: "item5" },
    { id: "item6" },
  ])

  return (
    <div className="mx-4 mt-4">
      <h1 className="text-3xl font-bold text-center">Reorder List Page</h1>
      <h3>Drag items from one list to the other</h3>
      <List
        items={itemsHorizontal}
        onItemsChange={setItemsHorizontal}
        isHorizontal
      />
      <List items={itemsVertical} onItemsChange={setItemsVertical} />
    </div>
  )
}

export default ReorderPage
