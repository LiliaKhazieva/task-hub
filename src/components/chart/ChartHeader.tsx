"use client";
import styles from "./Chart.module.scss";
import { timeRanges } from "./chart.data";
import { ISelect } from "../tasks/Tasks";
import Select from "react-select";

interface Props {
  onRangeChange: (select: ISelect | null) => void;
  selectedRange: ISelect;
}

export function ChartHeader({ onRangeChange, selectedRange }: Props) {
  return (
    <div className={styles.chartHeader}>
      <h2 className={styles.heading}>Project Statistic</h2>
      <Select
        defaultValue={selectedRange}
        onChange={onRangeChange}
        options={timeRanges}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderRadius: "10px",
          }),
        }}
      />
    </div>
  );
}
