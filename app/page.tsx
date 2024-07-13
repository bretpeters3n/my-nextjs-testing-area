import { PrismaClient, Prisma } from "@prisma/client"
import { prisma } from "@/utils/db"
import Image from "next/image"
import AffGroupDisplay from "@/components/AffGroupDisplay"

const Home = async () => {
  // const data = await prisma.affgroup.findUnique({
  //   where: {
  //     id: "1",
  //   },
  //   // select: {
  //   //   title: true,
  //   //   content: true,
  //   // },
  // })
  // if (
  //   data?.content &&
  //   typeof data?.content === "object" &&
  //   Array.isArray(data?.content)
  // ) {
  // const arrayObject = data?.content as Prisma.JsonArray

  //   const affirmations = arrayObject[0]
  //   console.log(affirmations)
  // }

  return (
    <main className="">
      <div className="">Main</div>
      {/* <AffGroupDisplay data={data} /> */}
      {/* <div className="">{data.title}</div>
      <div className="">{data.content[1].affirmation.toString()}</div>
      <div className="">{data.content.length}</div> */}
      {/* <div className="">{arrayObject[0]}</div> */}
    </main>
  )
}

export default Home
