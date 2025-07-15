import { useState } from "react";
import s from "./CustomSelect.module.scss";
import { ISelect } from "../tasks/Tasks";
import { ChevronDown } from "lucide-react";
import { observer } from "mobx-react-lite";
import { taskStore } from "@/store/store";
import { TTaskSortBy, TTaskStatus } from "@/types/task.types";

interface Props {
  options: Array<TTaskStatus | "all">;
}

export const CustomSelect = observer(({ options }: Props) => {
  const [isShowOption, setIsShowOption] = useState(false);
  const currentStatus = taskStore.status;

  return (
    <div className={s.select}>
      <div
        className={s.selected}
        onClick={() => setIsShowOption(!isShowOption)}
      >
        {currentStatus || "all"}
        <ChevronDown size={18} />
      </div>
      {isShowOption && (
        <div
          className={isShowOption ? `${s.show} ${s.options}` : `${s.options}`}
        >
          {options.map((option, i) => (
            <div
              key={i}
              className={s.option}
              onClick={() =>
                taskStore.setStatus(option === "all" ? null : option)
              }
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
