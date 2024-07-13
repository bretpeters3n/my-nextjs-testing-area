import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement("div")
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal")
    modalRoot.appendChild(elRef.current)
    return () => modalRoot.removeChild(elRef.current)
  }, [])

  return createPortal(
    <div className="bg-black/90 fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
      <div className="bg-white text-black p-4 rounded-md">{children}</div>
    </div>,
    elRef.current
  )
}

export default Modal
