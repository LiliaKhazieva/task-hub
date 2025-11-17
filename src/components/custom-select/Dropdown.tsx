// Dropdown.tsx
import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import DropdownStore, { Option } from "../../store/filter.store";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./CustomSelect.module.scss";
import cn from "clsx";

interface DropdownProps {
  store: DropdownStore;
  placeholder?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  store,
  placeholder,
  className,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, () => {
    store.close();
  });

  const handleOptionClick = (option: Option) => {
    store.selectOption(option.value);
  };

  return (
    <div className={styles.select}>
      <div className={styles.selected} onClick={() => store.toggle()}>
        {store.selectedLabel}
      </div>
      {store.isOpen && (
        <div ref={menuRef} className={cn(styles.options)}>
          {store.options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => {
                handleOptionClick(option);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(Dropdown);
