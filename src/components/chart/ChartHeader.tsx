import { useState } from "react";
import styles from "./Chart.module.scss";
import { ChevronDown } from "lucide-react";
import { timeRanges } from "./chart.data";

interface Props {
  onRangeChange: (range: IRange) => void;
  selectedRange: IRange;
}

export function ChartHeader({ onRangeChange, selectedRange }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handlerangeChange = (range: IRange) => {
    onRangeChange(range);
    setIsDropdownOpen(false);
  };
  return (
    <div className={styles.chartHeader}>
      <h2 className={styles.heading}>Project Statistic</h2>
      <div className={styles.select}>
        <button
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          {selectedRange.label}
        </button>
        <ChevronDown size={16} />
        {isDropdownOpen && (
          <div className={styles.dropDown}>
            {timeRanges.map((range) => (
              <button
                key={range.value}
                onClick={() => {
                  handlerangeChange(range);
                }}
              >
                {range.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
