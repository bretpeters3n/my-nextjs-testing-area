"use client"

import { deleteTodo } from "@/utils/api"
import Link from "next/link"

const History = ({ data }) => {
  console.log(data)
  return (
    <div className="">
      {data.map((item) => (
        <div className="grid gap-x-8 grid-cols-3" key={item.id}>
          <div className="">{item.title}</div>
          <Link href={`/todo/${Number(item.id)}`}>Update</Link>
          <button className="" onClick={() => deleteTodo(Number(item.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default History
