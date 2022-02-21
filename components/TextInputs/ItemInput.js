import ButtonMain from '../Buttons/ButtonMain'
import {useState } from 'react'
// import { UserContext } from '../../context/Provider'
import axios from 'axios';
import router from 'next/router';

export default function ItemInput(props) {
  // const { userId, userName } = useContext(UserContext)
  const {lists, setLists, listId, setListId} = props;

  const [listName, setListName] = useState('')

  // const addList = () => {
  //   if (userId == undefined || userId == '') {
  //     const confirmation = confirm('Please log in to create a list')
  //     if(confirmation == true){
  //       router.push('/')
  //     }
  //   } else {
  //     if (listName == null || listName == '') {
  //       alert('You must enter a list name')
  //     } else {
  //       try {
  //         axios.post('/api/lists', {
  //           userId,
  //           listName,
  //         }).then((res)=>{
  //           setLists([...lists, {list_id: res.data.id, list_name: res.data.listName, user_id: res.data.userId, user_name: userName}])
  //           setListId({list_id: res.data.id, list_name: res.data.listName, user_id: res.data.userId, user_name: userName})
  //         }).then(()=>{
  //           setListName('')
  //         })
  //       } catch (err) {
  //         console.log(err)
  //         alert('Error creating list')
  //       }
  //     }
  //   }
  // }

  return (
    <div className="my-4 flex md:flex-row items-center justify-between flex-col">
      <input
        className="shadow w-4/5 mb-4 md:mb-0 appearance-none border rounded py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="item"
        type="text"
        placeholder="Enter new list name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      <div className="whitespace-nowrap">
        <ButtonMain
        buttonText={"Add"}
        backgroundColor={"teal"}
        textColor={"white"}
        onClick={() => {addList()}}
        />
      </div>
    </div>
  )
}
