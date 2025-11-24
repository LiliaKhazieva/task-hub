// Dropdown.tsx
import React, { useRef } from "react";
import { observer } from "mobx-react-lite";
import DropdownStore, { Option } from "../../store/filter.store";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./CustomSelect.module.scss";
import cn from "clsx";
import { ChevronDown } from "lucide-react";

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

  return (
    <div className={styles.select}>
      <div
        className={styles.selected}
        onClick={() => {
          store.toggle();
        }}
      >
        {store.selectedLabel}
        <ChevronDown size={18} />
      </div>
      {store.isOpen && (
        <div ref={menuRef} className={cn(styles.options)}>
          {store.options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => {
                store.selectOption(option.label);
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
