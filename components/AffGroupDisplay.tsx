"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Modal from "./Modal"
import {
  createAGAffirmation,
  updateAGAffirmation,
  updateAGTitle,
} from "@/utils/api"
import ShortUniqueId from "short-unique-id"

const AffGroupDisplay = ({ data }) => {
  const [showModalTitle, setShowModalTitle] = useState(false)
  const [showModalAff, setShowModalAff] = useState(false)
  const [showModalAddAff, setShowModalAddAff] = useState(false)
  const [title, setTitle] = useState(data.title)
  const [content, setContent] = useState(data.content)
  const [affText, setAffText] = useState("")
  const [newAffText, setNewAffText] = useState("")
  const [affTextId, setAffTextId] = useState(0)

  const uid = new ShortUniqueId({ length: 4 })

  const handleSubmitUpdateTitle = async (e: any) => {
    e.preventDefault()
    if (!title) {
      alert("Title is required")
      return
      //add in alert to say title is required
    }
    updateAGTitle(data.id, title)
      .then((res) => {
        console.log(res)
        setTitle(title)
        setShowModalTitle(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleSubmitUpdateAff = async (e: any) => {
    e.preventDefault()
    if (!affText) {
      alert("Affirmation is required")
      return
      //add in alert to say affirmation is required
    }
    let contentCopy = content
    let affUpdate = { id: affTextId, affirmation: affText }
    contentCopy.splice(affTextId, 1, affUpdate)
    // updateAGAffirmation(data.id, contentCopy)
    //   .then((res) => {
    //     console.log(res)
    //     setContent(contentCopy)
    //     setShowModalAff(false)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    console.log(contentCopy)
    console.log(affText)
    console.log(affTextId)
  }

  const handleSubmitAddAff = async (e: any) => {
    e.preventDefault()
    if (!newAffText) {
      alert("Affirmation is required")
      return
      //add in alert to say affirmation is required
    }
    let contentCopy = content
    let affNew = { id: uid.rnd(), affirmation: newAffText }
    contentCopy.push(affNew)
    updateAGAffirmation(data.id, contentCopy)
      .then((res) => {
        console.log(res)
        setContent(contentCopy)
        setShowModalAddAff(false)
      })
      .catch((err) => {
        console.log(err)
      })
    console.log(contentCopy)
    console.log(newAffText)
  }

  const handleShowUpdateAffModal = (e: any) => {
    // console.log(e)
    let entry = content.find((item) => item.id === e)
    const { id, affirmation } = entry
    console.log(id)
    console.log(affirmation)
    // console.log(affText)
    setAffTextId(id)
    setAffText(affirmation)
    console.log(affText)
    console.log(affTextId)
    setShowModalAff(true)
  }

  useEffect(() => {
    console.log("useEffect run")
  }, [affText]) // Only re-run the effect if affText changes

  // Look at how Title modal saves changes to DB
  // use knowledge to apply to Aff modal

  return (
    <div>
      <h1>Affirmations Group Display</h1>
      <h2 className="text-2xl">
        <button onClick={() => setShowModalTitle(true)}>{title}</button>
      </h2>

      {content.map((item) => (
        <p key={item.id}>
          <button onClick={() => handleShowUpdateAffModal(item.id)}>
            {item.affirmation}
          </button>
        </p>
      ))}

      <button onClick={() => setShowModalAddAff(true)}>Add Affirmation</button>

      {showModalAddAff ? (
        <Modal>
          <div className="flex flex-col">
            <form onSubmit={handleSubmitAddAff}>
              <h1>Add your new affirmation</h1>
              <label htmlFor="newAffText">
                <input
                  type="text"
                  id="newAffText"
                  name="newAffText"
                  value={newAffText}
                  onChange={(e) => setNewAffText(e.target.value)}
                />
              </label>

              <div className="buttons">
                <button>Submit</button>;
              </div>
            </form>
            <button onClick={() => setShowModalTitle(false)}>Cancel</button>
          </div>
        </Modal>
      ) : null}
      {showModalTitle ? (
        <Modal>
          <div className="flex flex-col">
            <form onSubmit={handleSubmitUpdateTitle}>
              <h1>Update your title</h1>
              <label htmlFor="title">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <div className="buttons">
                <button>Yes</button>;
              </div>
            </form>
            <button onClick={() => setShowModalTitle(false)}>No</button>
          </div>
        </Modal>
      ) : null}
      {showModalAff ? (
        <Modal>
          <div className="flex flex-col">
            <form onSubmit={handleSubmitUpdateAff}>
              <h1>Update your affirmation</h1>
              <label htmlFor="affText">
                <input
                  type="text"
                  id="affText"
                  name="affText"
                  value={affText}
                  onChange={(e) => setAffText(e.target.value)}
                />
              </label>

              <div className="buttons">
                <button>Update</button>
              </div>
            </form>
            <button onClick={() => setShowModalAff(false)}>No</button>
            <button onClick={() => setShowModalAff(false)}>Delete</button>
          </div>
        </Modal>
      ) : null}
    </div>
  )
}

export default AffGroupDisplay
