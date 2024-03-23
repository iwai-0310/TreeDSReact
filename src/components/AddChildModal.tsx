import React, { useState } from "react";
//import responsive modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const AddChildModal = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(false);
  //change state from close to open when open clicked
  const onOpenModal = () => setOpen(true);
  //change state from open to close when close clicked
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal}>
        <h2>Add element:</h2>
        <form>
          <div className="mb-4">
            <label
              for="childElement"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Title
            </label>
            <input
              id="childElement"
              type="text"
              placeholder="Enter child element name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
