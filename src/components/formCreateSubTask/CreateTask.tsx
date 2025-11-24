import { X } from "lucide-react";
import s from "../formEditTask/FormEditTask.module.scss";
import { createPortal } from "react-dom";

import { ChangeEvent, FormEvent, useState } from "react";

import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { createSubTask } from "@/services/tasks/task-client.service";

export const CreateTask = ({
  onClose,
  subTask,
}: {
  onClose: () => void;
  subTask: string;
}) => {
  // const [title, setName] = useState("");
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    const title = e.target[0].value;
    createSubTask(subTask.id, { title });
    // mutate();
    toast.success("SubTask updated successfully", {
      id: "toast",
    });
  };

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <X onClick={onClose} className={s.closeBtn} />
        <h4>Create SubTask</h4>
        <form onSubmit={onSubmit} className={s.form}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              value={subTask}
              // onChange={handleInputChange}
              id="title"
              required
            />
          </label>
          {/* {isValidName && (
            <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
          )} */}
          <button type="submit">
            add
            {/* {isPending ? "Addind..." : "Add"} */}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
};
