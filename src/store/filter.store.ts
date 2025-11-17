// DropdownStore.ts
import { makeAutoObservable } from "mobx";

export type Option = {
  value: string | number;
  label: string;
};

class DropdownStore {
  selectedValue: string | number | null = null;
  isOpen = false;
  options: Option[];

  constructor(options: Option[]) {
    this.options = options;
    makeAutoObservable(this);
  }

  selectOption(value: string | number) {
    this.selectedValue = value;
    this.close();
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  get selectedLabel(): string {
    const selectedOption = this.options.find(
      (opt) => opt.value === this.selectedValue
    );
    return selectedOption?.label || this.options[0].label;
  }
}

export default DropdownStore;
