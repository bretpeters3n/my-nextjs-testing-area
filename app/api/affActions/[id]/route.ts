import { NextResponse } from "next/server"
import { prisma } from "@/utils/db"

export const PATCH = async (request: Request, { params }) => {
  const { content } = await request.json()
  const updatedEntry = await prisma.affgroup.update({
    where: {
      id: params.id,
    },
    data: {
      content,
    },
  })
  console.log("updatedEntry: ")
  console.log({ updatedEntry })
  return NextResponse.json({ data: updatedEntry })
}

export const DELETE = async (request: Request, { params }) => {
  // const { id } = params
  // const deletedEntry = await prisma.affgroup.delete({
  //   where: {
  //     id: Number(id),
  //   },
  // })
  // console.log("deletedEntry: ")
  // console.log({ deletedEntry })
  // return NextResponse.json({ data: deletedEntry })
}
