"use client"

import Link from "next/link"

const HistoryEntry = ({ data }) => {
  console.log(data)
  return (
    // <Link className="text-lg" href={`/db/${data.id}`}>
    <div>{data.content}</div>
    // </Link>
  )
}

export default HistoryEntry
