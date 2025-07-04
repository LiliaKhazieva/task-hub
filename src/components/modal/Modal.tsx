import { X } from "lucide-react";
import s from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { ITask } from "@/types/task.types";
import { useState } from "react";
import { error } from "console";
import { TASKS } from "../tasks/tasks.data";

const data = {
  name: "Create card",
  date: "123",
};

export function Modal({
  onClose,
  isOpen,
  task,
}: {
  onClose: () => void;
  isOpen: boolean;
  task: ITask;
}) {
  const [formData, setFormData] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormData(e.target.value);
    if (formData.trim() === "") {
      setError("");
    } else {
      setError("Field is empty");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <X onClick={onClose} className={s.closeBtn} />
        <h4>Edit Task {task.id}</h4>
        <form onSubmit={handleSubmit} className={s.form}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              style={{ borderColor: "red" }}
              type="text"
              name="title"
              value={formData}
              onChange={handleInputChange}
            />
          </label>
          {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
          <label className={s.label}>
            Due date
            <input
              className={s.input}
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>,
    document.body
  );
}
