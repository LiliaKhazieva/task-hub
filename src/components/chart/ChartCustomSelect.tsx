import { useClickOutside } from "@/hooks/useClickOutside";
import { taskStore } from "@/store/store";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
import s from "../custom-select/CustomSelect.module.scss";
import { ChevronDown } from "lucide-react";

interface Props {
  options: string[];
}

export const CustomSelect = observer(({ options }: Props) => {
  const [isShowOption, setIsShowOption] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const select = taskStore.chartSelect;

  useClickOutside(menuRef, () => {
    setIsShowOption(false);
  });

  return (
    <div className={s.select}>
      <div className={s.selected} onClick={() => setIsShowOption(true)}>
        {select[0] || select}
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
