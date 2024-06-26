import { NextResponse } from "next/server"
import { prisma } from "@/utils/db"

export const PATCH = async (request: Request, { params }) => {
  const { title } = await request.json()
  const updatedEntry = await prisma.todo.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title,
    },
  })
  console.log("updatedEntry: ")
  console.log({ updatedEntry })
  return NextResponse.json({ data: updatedEntry })
}

export const DELETE = async (request: Request, { params }) => {
  const { id } = params
  const deletedEntry = await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  })
  console.log("deletedEntry: ")
  console.log({ deletedEntry })
  return NextResponse.json({ data: deletedEntry })
}
