import { X } from "lucide-react";
import s from "./FormEditTask.module.scss";
import { createPortal } from "react-dom";
import { ITask, TFormData } from "@/types/task.types";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import {
  taskClientGetById,
  taskClientUpdate,
} from "@/services/tasks/task-client.service";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskSchema } from "@/zod-schemes/task.zod";
import { ta } from "zod/locales";

export const FormEditTask = ({
  task,
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  task: ITask;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isSubmitting, errors },
  } = useForm<TFormData>({ resolver: zodResolver(TaskSchema) });

  useEffect(() => {
    reset({ title: task.title, due_date: task.due_date });
  }, []);

  const onSubmit = (data: TFormData) => {
    taskClientUpdate(task.id, data);
    onClose();
    reset();
  };

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

  return createPortal(
    <div className={s.wrapper}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <X onClick={onClose} className={s.closeBtn} />
        <h4>Edit Task {task.id}</h4>
        <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              {...register("title")}
              type="text"
              placeholder="Enter title..."
              id="title"
            />
          </label>
          {errors.title && (
            <span role="alert" className="error">
              {errors.title?.message}
            </span>
          )}

          <label className={s.label}>
            Due date
            <input
              className={s.input}
              type="date"
              {...register("due_date")}
              placeholder="Enter due date..."
              id="due_date"
            />
          </label>
          {errors.due_date && (
            <span role="alert" className="error">
              {errors.due_date?.message}
            </span>
          )}
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
