import { X } from "lucide-react";
import s from "../modal/Modal.module.scss";
import { createPortal } from "react-dom";
import {
  ISubTask,
  ITask,
  TSubTaskData,
  TTaskFormData,
} from "@/types/task.types";
import { ChangeEvent, FormEvent, useState } from "react";
import { observer } from "mobx-react-lite";
import { taskStore } from "@/store/store";
import { toast } from "sonner";
import { on, title } from "process";

export const CreateTask = observer(
  ({ onClose, id, task }: { onClose: () => void; task: ITask; id: string }) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    console.log(name);

    const isValidName = name === "";

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      // if (name.trim()) {
      //   setError("Поле неможет быть пустым");
      // }
      setName(e.target.value);
    };

    const onSubmit = (data) => {
      taskStore.addSubTask(id, data);
      toast.success("SubTask updated successfully", {
        id: "toast",
      });
      setName("");
      onClose();
    };

    return createPortal(
      <div className={s.wrapper}>
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          <X onClick={onClose} className={s.closeBtn} />
          <h4>Create subTask</h4>
          <form className={s.form}>
            <label className={s.label}>
              Name
              <input
                className={s.input}
                type="text"
                value={name}
                onChange={handleInputChange}
                required
              />
            </label>
            {isValidName && (
              <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
            )}
            <button type="submit" onClick={onSubmit}>
              Add
            </button>
          </form>
        </div>
      </div>,
      document.body
    );
  }
);
