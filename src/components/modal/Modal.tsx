import { X } from "lucide-react";
import s from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { ITask, TTaskFormData } from "@/types/task.types";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import { taskStore } from "@/store/store";
import { toast } from "sonner";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";

export const Modal = observer(
  ({
    onClose,
    task,
  }: {
    onClose: () => void;
    isOpen: boolean;
    task: ITask;
  }) => {
    const [formData, setFormData] = useState<TTaskFormData>({
      title: task.title,
      dueDate: task.dueDate.getDate(),
    });

    console.log(formData);

    const { register, handleSubmit, reset } = useForm<TTaskFormData>();

    const [error, setError] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    // function isValidDateFormat(date: string) {
    //   const regex = /^\d{4}-\d{2}-\d{2}$/;
    //   return regex.test(date);
    // }

    // const isValidName = title === "";
    // const isValidData = isValidDateFormat(date);

    useEffect(() => {
      const tasks = taskStore.getTaksById(task.id);
      if (!tasks) return;
      reset({
        title: tasks.title,
        dueDate: tasks.dueDate,
      });
    }, [task.id]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      // if (isValidName) {
      //   setError("Поле неможет быть пустым");
      // }
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const onSubmit = (data: TTaskFormData) => {
      taskStore.updateTask(task.id, formData);
      toast.success("Task updated successfully", {
        id: "toastId",
      });
      onClose();
    };

    return createPortal(
      <div className={s.wrapper}>
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          <X onClick={onClose} className={s.closeBtn} />
          <h4>Edit Task {task.id}</h4>
          <form
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className={s.form}
          >
            <label className={s.label}>
              Name
              <input
                className={s.input}
                type="text"
                {...register("title")}
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </label>

            <p style={{ color: "red", fontSize: "12px" }}>{error}</p>

            <label className={s.label}>
              Due date
              <input
                className={s.input}
                type="date"
                {...register("dueDate")}
                value={formData.dueDate}
                onChange={handleInputChange}
                required
              />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>,
      document.body
    );
  }
);
