// Modal.jsx
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const modalRoot =
  typeof window !== "undefined" ? document.getElementById("modal-root") : null;

const Modal = ({ children, onClose, closeOnBackdrop = true }) => {
  useEffect(() => {
    document.body.classList.add("body--no-scroll");
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("body--no-scroll");
    };
  }, [onClose]);

  if (!modalRoot) return null;

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={() => closeOnBackdrop && onClose?.()}
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
