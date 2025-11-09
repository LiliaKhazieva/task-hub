"use client";
import styles from "./Chart.module.scss";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useContext, useState } from "react";
import { ChartHeader } from "./ChartHeader";
import { monthData, yearData } from "./chart.data";
import { CustomTooltip } from "./CustomTooltip";
import { ThemeContext } from "@/providers/ThemeProvider";

export function Chart() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  useContext;
  const [selectedRange, setSelectedRange] = useState<string | null>("yearly");

  const selectedData = selectedRange === "yearly" ? yearData : monthData;

  return (
    <div
      className={theme === "dark" ? `task ${styles.wrapper}` : styles.wrapper}
    >
      <ChartHeader
        selectedRange={selectedRange}
        onRangeChange={setSelectedRange}
      />
      <AreaChart
        width={700}
        height={255}
        data={selectedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="label" />
        <YAxis domain={[10, 50]} />
        <Tooltip content={<CustomTooltip label={""} />} />
        <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F3F4F6" />
        <Area
          type="bump"
          dataKey="value"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </div>
  );
}
