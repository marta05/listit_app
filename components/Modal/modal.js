import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ show, onClose}) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleCloseClick = (e) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-slate-400 bg-opacity-70">
      <div className="bg-white w-96 h-96 rounded-lg p-5">
        <div className="flex justify-end">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>

        <div className="pt-1">
          <h1 className="mb-8 text-3xl text-center">Log in</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-6"
            name="email"
            placeholder="Email"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-8"
            name="password"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-teal text-white hover:bg-green-dark focus:outline-none my-1"
          // onClick={() => handleSubmission()}
        >
          Login
        </button>
      </div>
    </div>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root'),
    )
  } else {
    return null
  }
}

export default Modal
