"use client"

import { useState } from "react"

const ListsPage = () => {
  const [title01, setTitle01] = useState("")
  const [title02, setTitle02] = useState("")
  const [aff0101, setAff0101] = useState("")
  const [aff0102, setAff0102] = useState("")
  const [aff0103, setAff0103] = useState("")
  const [aff0104, setAff0104] = useState("")
  const [aff0105, setAff0105] = useState("")
  const [aff0201, setAff0201] = useState("")
  const [aff0202, setAff0202] = useState("")
  const [aff0203, setAff0203] = useState("")
  const [aff0204, setAff0204] = useState("")
  const [aff0205, setAff0205] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // console.log("click")
    console.log(title01)
    console.log(aff0101)
    console.log(aff0102)
    console.log(aff0103)
    console.log(aff0104)
    console.log(aff0105)
    console.log(title02)
    console.log(aff0201)
    console.log(aff0202)
    console.log(aff0203)
    console.log(aff0204)
    console.log(aff0205)
    // const title = title01 + title02
    // console.log(title
    // if (!title) {
    //   setError("Title is required")
    //   return
    // }
    // createTodo(title)
    //   .then((res) => {
    //     console.log(res)
    //     setMessage("Todo created successfully")
    //     setError("")
    //     setTitle("")
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     setError("Error creating todo")
    //   })
  }

  return (
    <div className="mx-4 mt-4">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col-2 gap-4">
          <div className="flex flex-col gap-4">
            <input
              className="text-black"
              type="text"
              name="title01"
              id="title01"
              placeholder="Title of group 1"
              value={title01}
              // value={title01 ? title01 : "title1"}
              onChange={(e) => setTitle01(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0101"
              id="aff0101"
              placeholder="Affirmation 1/1"
              value={aff0101}
              onChange={(e) => setAff0101(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0102"
              id="aff0102"
              placeholder="Affirmation 1/2"
              value={aff0102}
              onChange={(e) => setAff0102(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0103"
              id="aff0103"
              placeholder="Affirmation 1/3"
              value={aff0103}
              onChange={(e) => setAff0103(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0104"
              id="aff0104"
              placeholder="Affirmation 1/4"
              value={aff0104}
              onChange={(e) => setAff0104(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0105"
              id="aff0105"
              placeholder="Affirmation 1/5"
              value={aff0105}
              onChange={(e) => setAff0105(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              className="text-black"
              type="text"
              name="title02"
              id="title02"
              placeholder="Title of group 2"
              value={title02}
              onChange={(e) => setTitle02(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0201"
              id="aff0201"
              placeholder="Affirmation 2/1"
              value={aff0201}
              onChange={(e) => setAff0201(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0202"
              id="aff0202"
              placeholder="Affirmation 2/2"
              value={aff0202}
              onChange={(e) => setAff0202(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0203"
              id="aff0203"
              placeholder="Affirmation 2/3"
              value={aff0203}
              onChange={(e) => setAff0203(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0204"
              id="aff0204"
              placeholder="Affirmation 2/4"
              value={aff0204}
              onChange={(e) => setAff0204(e.target.value)}
            />
            <input
              className="text-black"
              type="text"
              name="aff0205"
              id="aff0205"
              placeholder="Affirmation 2/5"
              value={aff0205}
              onChange={(e) => setAff0205(e.target.value)}
            />
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="border-white border-2 rounded-md bg-blue-500 text-white px-4 py-2"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default ListsPage
