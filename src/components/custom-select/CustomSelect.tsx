import { RefObject, useRef, useState } from "react";
import s from "./CustomSelect.module.scss";
import { ISelect } from "../tasks/Tasks";
import { ChevronDown } from "lucide-react";
import { observer } from "mobx-react-lite";
import { taskStore } from "@/store/store";
import { TTaskSortBy, TTaskStatus } from "@/types/task.types";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Props {
  options: Array<TTaskStatus | "all">;
}

export const CustomSelect = observer(({ options }: Props) => {
  const [isShowOption, setIsShowOption] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const currentStatus = taskStore.status;

  useClickOutside(menuRef, () => {
    setIsShowOption(false);
  });

  return (
    <div className={s.select}>
      <div className={s.selected} onClick={() => setIsShowOption(true)}>
        {currentStatus || "all"}
        <ChevronDown size={18} />
      </div>
      {isShowOption && (
        <div
          ref={menuRef}
          className={isShowOption ? `${s.show} ${s.options}` : `${s.options}`}
        >
          {options.map((option, i) => (
            <div
              key={i}
              className={s.option}
              onClick={() => {
                taskStore.setStatus(option === "all" ? null : option);
                setIsShowOption(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
