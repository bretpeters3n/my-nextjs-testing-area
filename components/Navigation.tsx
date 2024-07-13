import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="flex flex-row justify-around">
      <Link href="/">Home</Link>
      <Link href="/db">Database</Link>
      <Link href={`/lists`}>Lists</Link>
      <Link href={`/reorder`}>Reorder</Link>
      <Link href={`/read`}>Read</Link>
    </nav>
  )
}

export default Navigation
