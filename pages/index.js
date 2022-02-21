import {useState, useEffect} from 'react'
import axios from 'axios'
// import db from '../lib/db'
import router from 'next/router';
// import {useContext} from 'react';
// import {UserContext} from '../context/Provider';
import Modal from '../components/Modal/modal';
import Visibility from '../components/Icons/Visibility'

export default function Home({data}) {

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
    <div className="flex flex-col sm:justify-between mt-10 md:mt-16 sm:w-full sm:flex-row">
      <div className="flex flex-col items-center sm:h-24 text-center sm:w-2/5 sm:pr-10">
        <h3 className="text-xl font-semibold md:text-3xl lg:text-4xl">Planning, shopping, organising have never been easier!</h3>
        <h4 className="text-lg sm:mt-4 md:text-xl lg:text-2xl mb-4">If you ever get lost in the amount of remainders, to-does apps, or sticky notes, you might find listit a perfect solution for you and your friends or family.</h4>
      </div>
        <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="name"
                        placeholder="user name" 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        />

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

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? &#160;
                    <a className="no-underline border-b border-color-primary text-blue"
                    onClick={() => setShowModal(true)}>
                        Log in
                    </a>
                    
                    <Modal
                      onClose={() => setShowModal(false)}
                      show={showModal}
                    >
                      Log in
                    </Modal>
                </div>
            </div>

        <div id="modal-root"></div>
    </div>
  )
}


// export async function getServerSideProps(context) {

//   try {
//     const data = await db.query('SELECT email FROM "user"')
//     .then(res => res.rows)

//     return {
//       props: {data}
//     }
//   } catch(err){
//     console.log(err)
//   }
// }
