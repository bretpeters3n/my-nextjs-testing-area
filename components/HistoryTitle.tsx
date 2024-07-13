"use client"

import Link from "next/link"

const HistoryTitle = ({ data }) => {
  console.log(data)
  return (
    <Link className="text-2xl" href={`/db/${data.id}`}>
      {data.content}
    </Link>
  )
}

export default HistoryTitle
