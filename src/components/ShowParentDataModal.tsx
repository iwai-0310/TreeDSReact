'use-client'
import React, { useState } from "react";
//import responsive modal
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ShowParentDataModal = ({ nodeName,onClose, onOpen,nodeAtt }) => {
  //add state to open or close  
  const [isModalOpen,setIsModalOpen]=useState(false);
  const handleOpenModal=()=>{
    setIsModalOpen(true);
  }
  const handleCloseModal=()=>{
    setIsModalOpen(false);
    onClose();
  }
  return (
    <div>
      <Modal open={onOpen} onClose={handleCloseModal}>
        <form >
          <div className="mb-4">
            <div className="flex justify-center items-center">
            <label
              htmlFor="childElement"
              className="block text-gray-700 text-sm font-bold mb-2 align-middle"
            >
              {nodeName}
            </label></div>
            <p>{nodeAtt}</p>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ShowParentDataModal;
