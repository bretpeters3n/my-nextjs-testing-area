"use client"

import { createTodo } from "@/utils/api"
import { revalidatePath } from "next/cache"
import { useState } from "react"
// import { prisma } from "@/utils/db"
// import History from "@/components/History"

type Props = {
  addTodo: Function
}

const AddTodo = () => {
  const [title, setTitle] = useState("")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!title) {
      setError("Title is required")
      return
    }
    createTodo(title)
      .then((res) => {
        console.log(res)
        setMessage("Todo created successfully")
        setError("")
        setTitle("")
      })
      .catch((err) => {
        console.log(err)
        setError("Error creating todo")
      })
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        {error && <div className="text-red-500">{error}</div>}
        {message && <div className="">{message}</div>}
        <div className="">
          <input
            className="text-black"
            type="text"
            name="title"
            id="title"
            placeholder="Title of todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="border-white border-2 rounded-md bg-blue-500 text-white px-4 py-2"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  )
}
export default AddTodo
