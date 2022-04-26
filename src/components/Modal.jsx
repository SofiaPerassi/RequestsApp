// import React, { useState, Fragment, useRef } from "react";
  
// const Modal = () => {
//     const [showModal, setShowModal] = useState(false);
//     return (
//       <>
//         <button
//           className="bg-blue-200 text-black active:bg-blue-500 
//         font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
//           type="button"
//           onClick={() => setShowModal(true)}
//         >
          
//         </button>
//         {showModal ? (
//           <>
//             <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
//               <div className="relative w-auto my-6 mx-auto max-w-3xl transition-opacity bg-gray-900 bg-opacity-90">
//                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                   <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
//                     <h3 className="text-3xl font=semibold">General Info</h3>
//                     <button
//                       className="bg-transparent border-0 text-black float-right"
//                       onClick={() => setShowModal(false)}
//                     >
//                       <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
//                         x
//                       </span>
//                     </button>
//                   </div>
//                   <div className="relative p-6 flex-auto">
//                   </div>
//                   <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
//                     <button
//                       className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
//                       type="button"
//                       onClick={() => setShowModal(false)}
//                     >
//                       Close
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : null}
//       </>
//     );
//   };
  
//   export default Modal;

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal({chart}) {

  const [isctive, setActive] = useState(false);
  const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex items-end justify-center min-h-3/4 pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-3/4" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-6xl sm:w-screen">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
                    <div>
                        {chart}
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="rounded-lg bg-sky-500 px-4 py-2 text-center transition duration-300 hover:bg-sky-400 text-white mt-2"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Close
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
