import React, { useState } from "react";
//import responsive modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const AddChildModal = ({ onClose, onOpen, onSubmit }) => {
  //add state to name 
  const [name,setName]=useState('');
  return (
    <div>
      <Modal open={onOpen} onClose={onClose}>
        <h2>Add element:</h2>
        <form >
          <div className="mb-4">
            <label
              htmlFor="childElement"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              name
            </label>
            <input
              id="childElement"
              value={name} onChange={event => setName(event.target.value)}
              type="text"
              placeholder="Enter child element name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="button" disabled={!name}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={()=>{onSubmit(name)
              onClose()
              }}
            >
              +
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddChildModal;
