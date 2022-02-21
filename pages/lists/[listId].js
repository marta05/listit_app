import { useState, useEffect } from 'react'
import axios from 'axios'
import db from '../../lib/db'
import CheckBox from '../../components/Icons/CheckBox'
import CheckBoxTick from '../../components/Icons/CheckBoxTick'
import ButtonMain from '../../components/Buttons/ButtonMain'

export default function ListId({ listId, items, listName }) {
  const [listItems, setListItems] = useState(items)

  console.log(listItems)
  return (
    <div>
      <h1 className="my-6">{listName}</h1>
      {listItems.map((item) => {
        return (
          <div key={item.id} className="flex pl-14 items-center mb-4 w-full justify-between">
            <div className='w-3/5 flex '>
                {item.completed ? <CheckBox/> : <CheckBoxTick/>}
                <h3>{item.name}</h3>
            </div>
            <div>
              <ButtonMain
                buttonText={'Edit'}
                backgroundColor={'teal'}
                textColor={'white'}
                // onClick={() => {
                //   updateList(item.list_id)
                // }}
              />
              <ButtonMain
                buttonText={`Remove`}
                backgroundColor={`teal`}
                // onClick={() => {
                //   deleteList(item.list_id)
                // }}
              />
            </div>
          </div>
        )
      })}
      <div className="my-4 flex md:flex-row items-center justify-start flex-col h-16">
        <input
          className="shadow ml-14 w-4/5 mb-4 md:mb-0 appearance-none border rounded py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="item"
          type="text"
          placeholder="Enter The Item"
        />

        <div>
          <ButtonMain
            backgroundColor={'teal'}
            buttonText={'Add Item'}
            textColor={'white'}
          />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  try {
    const listId = context.params.listId
    const data = await db
      .query(`SELECT * FROM "item" WHERE "item".list_id = ${listId}`)
      .then((res) => {
        return res.rows
      })

    const listName = await db
      .query(`SELECT name FROM "list" WHERE "list".id = ${listId}`)
      .then((res) => {
        return res.rows[0].name
      })

    return {
      props: {
        listId: listId,
        listName: listName,
        items: data,
      },
    }
  } catch (err) {
    console.log(err)
  }
}
