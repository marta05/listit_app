import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

// import { useSession, signIn, signOut } from 'next-auth/react';


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
      <div className="bg-white py-5 w-96 rounded-lg px-10">
        <div className="flex justify-end">
          <a href="#" onClick={handleCloseClick}>
            x
          </a>
        </div>

        <div className="pt-1 flex flex-col items-center">
          <h1 className="mb-6 text-3xl text-center">Sign in</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            // value={userName}
            // onChange={(e) => setUserName(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

      <button
          type="submit"
          className="w-full text-center py-3 rounded bg-teal text-white hover:bg-green-dark focus:outline-none"
          // onClick={() => handleSubmission()}
        >
          Sign In
        </button>

        <div className='flex items-center justify-center w-full my-4'>
            <hr className='w-1/3'/> 
            <p className='text-slate-300 '> &#160; or &#160; </p>
            <hr className='w-1/3'/>
        </div>        
      </div>

      <button type='button' className='text-slate-700 border border-grey-light shadow-lg rounded w-full text-center py-3 border-slate-200 mb-6'
      onClick={()=>{
        signIn('google')
      }}
      >Sign in with Google</button>
      <button type='button' className='text-slate-700 border border-grey-light shadow-lg rounded w-full text-center py-3 border-slate-200 mb-4'
      onClick={()=>{
        signIn('github')
      }}
      >Sign in with GitHub</button>
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
