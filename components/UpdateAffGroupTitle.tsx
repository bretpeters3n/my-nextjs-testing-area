"use client"

import { updateAGTitle } from "@/utils/api"
import { useState } from "react"
// import { prisma } from "@/utils/db"
// import History from "@/components/History"

// type Props = {
//   updateTodo: Function
// }

const UpdateAffGroupTitle = ({ data }) => {
  const [title, setTitle] = useState(data.title)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!title) {
      setError("Title is required")
      return
    }
    updateAGTitle(data.id, title)
      .then((res) => {
        console.log(res)
        setMessage("Todo updated successfully")
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
          <div className="">Update title:</div>
          <label htmlFor="title">
            <input
              className="text-black"
              type="text"
              name="title"
              id="title"
              placeholder="Title of todo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          {/* <div className="">Affirmations:</div>
          <label htmlFor="affirmations">
            <textarea
              className="text-black inline-block h-[400px] w-[300px]"
              type="text"
              name="affirmations"
              id="affirmations"
              placeholder="List of all affirmations"
              value={affirmations.map((item) => `${item}\n\n`)}
              onChange={(e) => setAffirmations(e.target.value)}
            />
          </label> */}
        </div>
        <div className="">
          <button
            type="submit"
            className="border-white border-2 rounded-md bg-blue-500 text-white px-4 py-2"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}
export default UpdateAffGroupTitle
