import { prisma } from "@/utils/db"
import AffGroupDisplay from "@/components/AffGroupDisplay"

const getData = async () => {
  const data = await prisma.affgroup.findUnique({
    where: {
      id: "1",
    },
  })
  return data
}

const ListsPage = async () => {
  const data = await getData()

  return (
    <main className="">
      <div className="">Main</div>
      <AffGroupDisplay data={data} />
    </main>
  )
}

export default ListsPage
