import React, { useState } from "react";
//import responsive modal
 import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";

const AddChildModal = ({open,setOpen}) => {
  // const [open, setOpen] = useState(false);
  //change state from close to open when open clicked
  const onOpenModal = () => setOpen(true);
  //change state from open to close when close clicked
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <button onClick={onOpenModal}>Open modal</button>
      <Modal open={open} onClose={onCloseModal}>
        <h2>lets see if this modal works</h2>
        {/* TBD later */}
        {/* Add a form to add data to it */}
      </Modal>
    </div>
  );
};

export default AddChildModal;
