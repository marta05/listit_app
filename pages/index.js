import {useState, useEffect} from 'react'
import Image from 'next/image';
import axios from 'axios'
import router from 'next/router';
import Modal from '../components/Modal/modal';
import Visibility from '../components/Icons/Visibility'

import HomeImg1 from '../public/HomeImg1.png'

import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from "next/dist/client/router";

export default function Home() {

const { data: session, status } = useSession();

console.log(status)

// if (status === "loading") {
//   return <p>Loading...</p>
// }

// if (status === "unauthenticated") {
//   return <p>Access Denied</p>
// }

const router = useRouter();

console.log("session", session);

const [showModal, setShowModal] = useState(false);
const [passwordShown, setPasswordShown] = useState(false);

const [password, setPassword] = useState('');
const [userName, setUserName] = useState('');
const [email, setEmail] = useState('');


const handleSubmission = async () => {
  createUser()
  console.log("handleSubmit working")
}

  const createUser = async () => {
    try{
      axios.post('/api/signup', {
        password: password,
        userName: userName,
        email: email,
      } )
    } catch(err){
      console.log(err)
    }
  }
  

  return (
    <div className="flex flex-col sm:justify-between mt-10 md:mt-16 sm:w-full sm:flex-row mb-4">
      <div className="flex flex-col items-center sm:h-24 text-center sm:w-6/12 sm:pr-10">
        <h3 className="text-xl font-semibold md:text-3xl lg:text-4xl">Planning, shopping, organising have never been easier!</h3>
        <h4 className="text-lg sm:mt-4 md:text-xl lg:text-2xl mb-4">If you ever get lost in the amount of remainders, to-does apps, or sticky notes, you might find listit a perfect solution for you and your friends or family.</h4>
        <div className='mt-4 opacity-40 flex justify-center items-center'>
            <Image src={HomeImg1}  />
        </div>
      </div>
        <div className="flex flex-col items-center justify-center">
                <div className="bg-white px-6 py-6 rounded shadow-md text-black">
                    <h1 className="mb-6 text-3xl text-center">Sign up</h1>

                    <input
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <div className='relative flex items-center justify-end'>
                    <i className='absolute pb-3 pr-3'
                    onClick={()=>setPasswordShown(!passwordShown)}
                    ><Visibility/></i>

                    <input 
                        type={passwordShown ? "text" : "password"}
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" 
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-teal text-white hover:bg-green-dark focus:outline-none my-1"
                        onClick={() => handleSubmission()}
                    >Create Account</button>

                    <div className='flex items-center justify-center w-full my-4'>
                      <hr className='w-1/3'/> 
                      <p className='text-slate-300 '> &#160; or &#160; </p>
                      <hr className='w-1/3'/>
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



                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the &#160;
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service &#160;
                        </a> and &#160;
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? &#160;
                    <a className="no-underline border-b border-color-primary text-blue"
                    // onClick={()=> router.push('/api/auth/signin')}>
                    onClick={() => setShowModal(true)}>
                        Sign in
                    </a>
                    
                    <Modal
                      onClose={() => setShowModal(false)}
                      show={showModal}
                    >
                      Sign in
                    </Modal>
                </div>
            </div>
            

        <div id="modal-root"></div>
    </div>
  )
}
