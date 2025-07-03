import { TTaskStatus } from "@/types/task.types";
import s from "./Filter.module.scss";
import { useState } from "react";

interface Props {
  status: TTaskStatus | null;
  setStatus: (status: TTaskStatus | null) => void;
  sortIndex: string;
  setSortIndex: (sortIndex: string) => void;
}

const statuses: TTaskStatus[] = [
  "all",
  "not-started",
  "in-progress",
  "completed",
];

export function Filter({ status, setStatus, sortIndex, setSortIndex }: Props) {
  const onSortChange = (e) => setSortIndex(e.target.value);
  const handleChange = (e) => setStatus(e.target.value);
  return (
    <div className={s.wrapper}>
      <select value={status || ""} onChange={handleChange}>
        {statuses.map((string, i) => (
          <option key={i} value={string}>
            {string}
          </option>
        ))}
      </select>
      <select value={sortIndex || ""} onChange={onSortChange}>
        {sorted.map((string, i) => (
          <option style={{ color: "red" }} key={i} value={string}>
            {string}
          </option>
        ))}
      </select>
    </div>
  );
}
