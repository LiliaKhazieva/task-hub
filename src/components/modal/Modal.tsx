import { X } from "lucide-react";
import s from "./Modal.module.scss";
import { createPortal } from "react-dom";

export function Modal({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) {
  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <X onClick={onClose} className={s.closeBtn} />
        <form action="" className={s.form}>
          <label className={s.label}>
            Name
            <input className={s.input} type="text" name="title" />
          </label>
          <label className={s.label}>
            Date
            <input className={s.input} type="date" name="date" />
          </label>
        </form>
      </div>
    </div>,
    document.body
  );
}
