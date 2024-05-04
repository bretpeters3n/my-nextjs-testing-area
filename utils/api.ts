const createURL = (path) => {
  return window.location.origin + path
}

export const updateTodo = async (id, title) => {
  const res = await fetch(
    new Request(createURL(`/api/todo/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ title }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export const deleteTodo = async (id) => {
  // console.log(id)
  // console.log(typeof id)
  const res = await fetch(
    new Request(createURL(`/api/todo/${id}`), {
      method: "DELETE",
      // body: JSON.stringify({ content }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export const createTodo = async (title) => {
  const res = await fetch(
    new Request(createURL("/api/todo"), {
      method: "POST",
      body: JSON.stringify({ title }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}
