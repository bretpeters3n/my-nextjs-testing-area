import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="flex flex-row justify-around">
      <Link href="/">Home</Link>
      <Link href="/todo">Todo</Link>
      {/* <Link href={`/todo/1`}>Update</Link> */}
    </nav>
  )
}

export default Navigation
