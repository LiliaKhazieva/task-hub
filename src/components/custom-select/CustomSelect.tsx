import { RefObject, useRef, useState } from "react";
import s from "./CustomSelect.module.scss";

import { ChevronDown } from "lucide-react";
import { observer } from "mobx-react-lite";
import { taskStore } from "@/store/store";
import { TTaskSortBy, TTaskStatus } from "@/types/task.types";
import { useClickOutside } from "@/hooks/useClickOutside";

interface Props {
  array: string[];
  current: string;
  onClicks: () => void;
}

export const CustomSelect = observer(({ array, current, onClicks }: Props) => {
  const [isShowOption, setIsShowOption] = useState(false);
  console.log(current, onClicks);
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    setIsShowOption(false);
  });

  return (
    <div className={s.select} ref={menuRef}>
      <div
        className={s.selected}
        onClick={() => setIsShowOption(!isShowOption)}
      >
        {current || array[0]}
        <ChevronDown size={18} />
      </div>
      {isShowOption && (
        <div
          className={isShowOption ? `${s.show} ${s.options}` : `${s.options}`}
        >
          {array.map((option, i) => (
            <div
              key={i}
              className={s.option}
              onClick={() => {
                onClicks;
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
