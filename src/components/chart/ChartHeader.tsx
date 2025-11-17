"use client";
import styles from "./Chart.module.scss";
import { arraySelect } from "./chart.data";
import { CustomSelect } from "./ChartCustomSelect";
import DropdownStore from "@/store/filter.store";

interface Props {
  options: string[];
}

export function ChartHeader({ options }: Props) {
  return <div className={styles.chartHeader}></div>;
}
