import { deleteTodo } from "@/utils/api"
import Link from "next/link"
import HistoryTitle from "./HistoryTitle"
import { prisma } from "@/utils/db"

const History = ({ data }) => {
  console.log(data)
  return (
    <div className="mt-4">
      {data.map((item) => (
        <div className="grid gap-x-8 grid-cols-1 mb-4" key={item.id}>
          <HistoryTitle data={item} />
          {/* TODO: take characteristic that matches this Title to the individual affs that are associated with it and lsit them here interactively */}

          {/* <Link
          <div
          {/* <Link className="text-2xl" href={`/db/${item.id}`}>
            {item.content}
          </Link> */}
          {/* {item.affirmations.affirmations.map((item) => (
            <div className="text-lg" key={item.id}>
              {item}
            </div>
          ))} */}
          {/* <Link href={`/todo/${Number(item.id)}`}>Update</Link>
          <button className="" onClick={() => deleteTodo(Number(item.id))}>
            Delete
          </button> */}
        </div>
      ))}
    </div>
  )
}

export default History
