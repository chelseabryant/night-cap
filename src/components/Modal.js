import React, { useEffect, useRef } from "react";

export default function Modal({ isOpened, onClose, children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpened]);

  const preventAutoClose = (e) => e.stopPropagation();

  return (
    <dialog className="modal" ref={ref} onCancel={onClose} onClick={onClose}>
      <div onClick={preventAutoClose}>
        {children}
      </div>
    </dialog>
  );
}
