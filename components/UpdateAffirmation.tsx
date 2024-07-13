"use client"

import { updateAGTitle } from "@/utils/api"
import { useState } from "react"
// import { prisma } from "@/utils/db"
// import History from "@/components/History"

// type Props = {
//   updateTodo: Function
// }

const UpdateAffirmation = ({ data }) => {
  const [affId, content] = data
  console.log(affId)
  console.log(content)
  const [affirmation, setAffirmation] = useState(
    content.content[affId].affirmation
  )
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!affirmation) {
      setError("Title is required")
      return
    }
    updateAGTitle(data.id, affirmation)
      .then((res) => {
        console.log(res)
        setMessage("Affirmation updated successfully")
        setError("")
        setAffirmation("")
      })
      .catch((err) => {
        console.log(err)
        setError("Error creating affirmation")
      })
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        {error && <div className="text-red-500">{error}</div>}
        {message && <div className="">{message}</div>}
        <div className="">
          <div className="">Update affirmation:</div>
          <label htmlFor="affirmation">
            <input
              className="text-black"
              type="text"
              name="affirmation"
              id="affirmation"
              placeholder="Affirmation"
              value={affirmation}
              onChange={(e) => setAffirmation(e.target.value)}
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
export default UpdateAffirmation
