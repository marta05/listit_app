import Listit from '../public/listit1.png';
import Image from 'next/image';
import router from 'next/router';
import {useState} from 'react'
import Modal from './Modal/modal';

export default function Layout({ children }) {

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    router.push('/');
  }
  

  return (
    <div className='flex flex-col h-screen'>
    <div className='bg-slate-900 h-20'>
    <div className='container mx-auto w-9/12 flex justify-between items-center h-20'>
        <div className='flex justify-start items-center h-2'>
            <a onClick={handleClick} className='hover:cursor-pointer'>
              <Image src={Listit} width='120px' height='40%' />
            </a>
        </div>
        <div className='flex justify-end items-center h-full'>
          <a className="mr-6 text-color-primary-light cursor-pointer">
            LISTS
          </a>
          {/* DON'T SHOW LISTS ON TOP UNTIL USER LOGS IN */}
          <a className='text-color-primary-light cursor-pointer' 
          onClick={() => setShowModal(!showModal)}>
            SIGN IN
          </a>
          {/* ADD LOGOUT FUNCTIONALITY E.G. getserversideprops, check if session opened and token stored in cookies, if yes the show LOGOUT */}
          <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
          >
            Log in
          </Modal>
        </div>
      </div>
    </div>
      <div id="modal-root" className='container mx-auto w-9/12 mb-auto my-2'>
      {children}
      
      </div>
    <div className='bg-slate-900 h-20 mb-0 static'>
      
    </div>

    </div>
  );
}
