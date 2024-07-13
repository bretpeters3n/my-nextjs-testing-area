const createURL = (path) => {
  return window.location.origin + path
}

export const createAGAffirmation = async (content) => {
  const res = await fetch(
    new Request(createURL(`/api/affActions`), {
      method: "POST",
      body: JSON.stringify({ content }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export const updateAGTitle = async (id, title) => {
  const res = await fetch(
    new Request(createURL(`/api/groupActions/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ title }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}

export const updateAGAffirmation = async (id, content) => {
  const res = await fetch(
    new Request(createURL(`/api/affActions/${id}`), {
      method: "PATCH",
      body: JSON.stringify({ content }),
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

export const createAGTitle = async (title) => {
  const res = await fetch(
    new Request(createURL(`/api/groupActions`), {
      method: "POST",
      body: JSON.stringify({ title }),
    })
  )

  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}
