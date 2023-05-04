import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FC, Fragment, useRef } from "react";

interface ModalProps {
  closeButton?: boolean;
  children?: React.ReactNode;
  modalState: boolean;
  onClick: () => void;
}

const Modal: FC<ModalProps> = ({
  closeButton = false,
  children,
  modalState,
  onClick,
}) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={modalState} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={onClick}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="inline-block align-bottom bg-white border border-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-1/3 sm:p-6 opacity-100 translate-y-0 sm:scale-100">
                <>{children}</>
                {/* {closeButton && (
                  <button
                    type="button"
                    className="absolute top-6 right-6 bg-[#E6EDF0] h-7 w-7 flex justify-center align-middle cursor-pointer hover:bg-gray-200 rounded-full p-1 items-center border-none outline-none"
                    onClick={onClick}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon fontSize="small" className="text-[#2C3545]" />
                  </button>
                )} */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
