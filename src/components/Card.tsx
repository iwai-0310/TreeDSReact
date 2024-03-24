import React,{useState} from 'react'
//import responsive modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const Card = ({dataAttibutes,onOpen,onClose}) => {
  //add state
  const [name,setName]=useState('');
  return (
    <div>
      <Modal open={onOpen} onClose={onClose}>
        <h2>Add child element to </h2>
        <form >    
            <p>{dataAttibutes}</p>
            <button
              type="button" disabled={!name}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={()=>{
              onClose()
              }}
            >
              X
            </button>
          
        </form>
      </Modal>
    </div>
  )
}

export default Card



