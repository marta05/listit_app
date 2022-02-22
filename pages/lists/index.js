import router from 'next/router'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ItemInput from '../../components/TextInputs/ItemInput'
import ButtonMain from '../../components/Buttons/ButtonMain'
import ListIcon from '../../components/Icons/ListIcon'
import { useSession, getSession, signIn, signOut } from 'next-auth/react';
// import db from '../../lib/db'


export default function Lists() {
  const [lists, setLists] = useState('')
  const [listId, setListId] = useState('')
  const [editList, setEditList] = useState(false)


  const { data: session } = useSession();

  console.log(session)

  useEffect(() => {
    // if (userId == undefined || userId == '') {
    //   setLists([])
    // } else {
      try {
        axios.get('/api/lists').then((res) => {
          setLists(res.data)
        })
      } catch (err) {
        console.log(err)
        setLists([])
      }
    // }
  }, [])

  // useEffect(() => {
  //   try {
  //       router.push(`/lists/${listId}`)
  //     } catch (err) {
  //       console.log(err)
  //     }
  // }, [listId])

  const updateList = (listId) => {
    setEditList(!editList)
    try {
      router.push(`/lists/${listId}`)
    } catch (err) {
      console.log(err)
    }
  }


const deleteList = (listId) => {
  if (userId == undefined || userId == '') {
    const confirmation = confirm('Please log in to delete a list')
    if (confirmation == true) {
      router.push('/')
    }
  } else {
    try {
      axios.delete(`/api/lists`, {data: {listId}}).then((res) => {
        setLists(lists.filter(list => list.list_id !== listId))
        }
      )
    } catch (err) {
      console.log(err)
    }
  }
}


  return (
    <div>
      {/* Hello {userName}! */}
      {lists == undefined || lists.length == 0 ? (
        <>
          <h1 className='my-4'>Welcome to Listit!</h1>
          <h4 className='my-8'>You have no lists yet, start by clicking the button below!</h4>
        </>
      ) : (
        <>
          <h1 className="my-6">Welcome back {userName}!</h1>
          <h2 className=" mb-2"></h2>
          <hr />
            {console.log("This is a list I wanna check", lists)}
            {lists.filter((item) => item.user_id == userId)
            .map((item) => (
              <div key={item.list_id}>
                <div className="display flex items-center h-16 w-full justify-between">
                  <ListIcon />
                  <ul
                    key={item.list_id}
                    className="flex items-center w-full justify-between"
                  >
                    <li className="text-xl decoration">{item.list_name}</li>
                    <div className="whitespace-nowrap flex h-full justify-end w-3/5 items-end">
                      <ButtonMain
                        buttonText={'Edit'}
                        backgroundColor={'teal'}
                        textColor={'white'}
                        onClick={() => {
                          updateList(item.list_id)
                        }}
                      />
                      <ButtonMain
                        buttonText={`Remove`}
                        backgroundColor={`teal`}
                        onClick={() => {
                          deleteList(item.list_id)
                        }}
                      />
                    </div>
                  </ul>
                </div>
                <hr />
              </div>
            ))}
        </>
      )}
      <ItemInput lists={lists} setLists={setLists} listId={listId} setListId={setListId} />
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}