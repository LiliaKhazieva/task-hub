import { useState } from "react";
import styles from "./Chart.module.scss";
import { ChevronDown } from "lucide-react";
import { timeRanges } from "./chart.data";
import { CustomSelect } from "../custom-select/CustomSelect";
import { ISelect } from "../tasks/Tasks";

interface Props {
  onRangeChange: (select: ISelect) => void;
  selectedRange: ISelect;
}

export function ChartHeader({ onRangeChange, selectedRange }: Props) {
  return (
    <div className={styles.chartHeader}>
      <h2 className={styles.heading}>Project Statistic</h2>
      <CustomSelect
        options={timeRanges}
        selectedOption={selectedRange}
        setSelectedOption={onRangeChange}
      />
    </div>
  );
}
