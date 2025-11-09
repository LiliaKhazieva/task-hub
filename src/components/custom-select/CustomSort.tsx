import { useRef, useState } from "react";
import s from "./CustomSelect.module.scss";
import { ISelect } from "../tasks/Tasks";
import { ChevronDown } from "lucide-react";
import { observer } from "mobx-react-lite";
import { taskStore } from "@/store/store";
import { TTaskSortBy } from "@/types/task.types";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Props {
  options: Array<TTaskSortBy>;
}

export const CustomSort = observer(({ options }: Props) => {
  const [isShowOption, setIsShowOption] = useState(false);
  const currentStatus = taskStore.sortByDueDate;
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    setIsShowOption(false);
  });

  return (
    <div className={s.select}>
      <div className={s.selected} onClick={() => setIsShowOption(true)}>
        {currentStatus || "asc"}
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
                taskStore.setSortByDueDate(option);
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
