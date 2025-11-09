"use client";
import styles from "./Chart.module.scss";
import { timeRanges } from "./chart.data";
import { ISelect } from "../tasks/Tasks";
import Select from "react-select";
import { CustomSelect } from "./ChartCustomSelect";

interface Props {
  onRangeChange: (select: ISelect | null) => void;
  selectedRange: ISelect;
}

const array: string[] = ["year", "month"];

export function ChartHeader({ onRangeChange, selectedRange }: Props) {
  return (
    <div className={styles.chartHeader}>
      <h2 className={styles.heading}>Project Statistic</h2>
      <CustomSelect options={array} />
    </div>
  );
}
