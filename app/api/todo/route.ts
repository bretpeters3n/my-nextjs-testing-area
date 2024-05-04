import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export const POST = async (request: Request) => {
  const { title } = await request.json()
  const entry = await prisma.todo.create({
    data: {
      title: title,
    },
  })

  revalidatePath("/todo")

  return NextResponse.json({ data: entry })
}

export const GET = async (request: Request) => {
  const getEntries = await prisma.todo.findMany()
  console.log("getEntries: ")
  console.log({ getEntries })
  return NextResponse.json({ data: getEntries })
}
