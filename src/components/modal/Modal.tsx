import { X } from "lucide-react";
import s from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { ITask, TTaskFormData } from "@/types/task.types";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";

import { taskStore } from "@/store/store";
import { toast } from "sonner";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  taskClientGetById,
  taskClientUpdate,
} from "@/services/tasks/task-client.service";

export const Modal = ({
  onClose,
  task,
}: {
  onClose: () => void;
  isOpen: boolean;
  task: ITask;
}) => {
  // const [formData, setFormData] = useState<TTaskFormData>({
  //   title: task.title,
  //   due_date: task.due_date,
  // });
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");

  // const { register, handleSubmit, reset } = useForm<TTaskFormData>();

  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // function isValidDateFormat(date: string) {
  //   const regex = /^\d{4}-\d{2}-\d{2}$/;
  //   return regex.test(date);
  // }

  // const isValidName = title === "";
  // const isValidData = isValidDateFormat(date);

  // const { isSuccess, data } = useQuery({
  //   queryKey: ["task", task.id],
  //   queryFn: () => taskClientGetById(task.id),
  //   enabled: !!task.id,
  // });

  // const { mutate, isPending } = useMutation({
  //   mutationKey: ["task", "update", task.id],
  //   mutationFn: (data: TTaskFormData) => taskClientUpdate(task.id, data),
  //   onSuccess: () => {
  //     toast.success("Task updated successfully");
  //     onClose();
  //   },
  //   onError: () => {
  //     toast.error("Failed to update task");
  //   },
  // });

  // console.log(data);

  // useEffect(() => {
  //   if (!isSuccess || !data) {
  //     toast.error("Task not found");
  //     return;
  //   }

  //   reset({
  //     title: data.title,
  //     due_date: data.due_date,
  //   });
  // }, [isSuccess]);

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   // if (isValidName) {
  //   //   setError("Поле неможет быть пустым");
  //   // }
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const handleUpdate = (e) => {
    // taskStore.updateTask(task.id, formData);
    // mutate(formData);
    const title = e.target[0]?.value;
    const due_date = e.target[1]?.value;
    if (!title || !due_date) {
      toast.error("Please enter title or duedate");
      return;
    }
    taskClientUpdate(task.id, { title, due_date });
  };

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <X onClick={onClose} className={s.closeBtn} />
        <h4>Edit Task {task.id}</h4>
        <form onSubmit={handleUpdate} className={s.form}>
          <label className={s.label}>
            Name
            <input className={s.input} type="text" id="title" required />
          </label>

          <p style={{ color: "red", fontSize: "12px" }}>{error}</p>

          <label className={s.label}>
            Due date
            <input className={s.input} type="date" id="due_date" required />
          </label>
          {/* <button disabled={isPending} type="submit">
            {isPending ? "Updating..." : "Save"}
          </button> */}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>,
    document.body
  );
};
