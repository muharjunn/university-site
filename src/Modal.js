import React from "react";

const Modal = ({ isOpen, onClose, data }) => {
  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "block" : "hidden"
      } h-screen w-screen flex justify-center items-center bg-black bg-opacity-50`}
    >
      <div className="bg-white w-[400px] h-[200px] p-6 rounded-lg shadow-lg">
        <div className="flex flex-row">
          <div className="flex flex-col mr-[10px]">
            <h3>Name :</h3>
            <h3>{data.name}</h3>
            <h3>Website :</h3>
            <h3>{data.web_pages}</h3>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            onClick={onClose}
            className="border border-black p-2 rounded-md text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
