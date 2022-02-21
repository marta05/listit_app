import {useState} from 'react'

export default function CheckBoxTick(props) {
    const [checkBoxTick, setCheckboxClick] = useState(false)

    return (
      <svg
        className="fill-teal-darkest mr-4"
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width="32px"
        onClick={
            ()=>{
                setCheckboxClick(!checkBoxTick)
            }
        }
      >
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z' />
      </svg>
    );
  }