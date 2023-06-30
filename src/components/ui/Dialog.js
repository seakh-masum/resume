import React, { useEffect } from "react";
import CloseIcon from '../icons/CloseIcon';

const Dialog = (props) => {
  const { title, closeModal } = props;


  useEffect(() => {
    const bind = e => {
      if (e.keyCode !== 27) {
        return
      }

      if (document.activeElement && ['INPUT', 'SELECT'].includes(document.activeElement.tagName)) {
        return
      }

      closeModal()
    }

    document.addEventListener('keyup', bind)
    return () => document.removeEventListener('keyup', bind)
  }, [props.children, closeModal]);


  return (
    <div className={`flex flex-col gap-8 transition duration-500 ease-in-out sm:w-dialog w-full`}>
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">{title}</h1>
        <button onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {props.children}
      </div>
    </div>
  );
}

export default Dialog;
