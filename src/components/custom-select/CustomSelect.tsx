import { useState } from "react";
import s from "./CustomSelect.module.scss";
import { ISelect } from "../tasks/Tasks";
import { ChevronDown } from "lucide-react";

interface Props {
  options: ISelect[];
  selectedOption: ISelect;
  setSelectedOption: (option: ISelect) => void;
}

export function CustomSelect({
  options,
  selectedOption,
  setSelectedOption,
}: Props) {
  const [isShowOption, setIsShowOption] = useState(false);

  const handleSelect = (option: ISelect) => {
    setSelectedOption(option);
    setIsShowOption(false);
  };
  return (
    <div className={s.select}>
      <div
        className={s.selected}
        onClick={() => setIsShowOption(!isShowOption)}
      >
        {selectedOption ? selectedOption.label : "All"}
        <ChevronDown size={18} />
      </div>
      {isShowOption && (
        <div
          className={isShowOption ? `${s.show} ${s.options}` : `${s.options}`}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={s.option}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
