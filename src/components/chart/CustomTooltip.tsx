import { useMemo } from "react";

interface Props {
  active?: boolean;
  payload?: Array<{
    value: number;
  }>;
  label: string;
}

export function CustomTooltip({ active, payload, label }: Props) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#745FF2",
          color: "#fff",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "20px",
        }}
      >
        {payload.map((entry, index) => (
          <span
            key={`item-${index}`}
          >{`${label}: ${entry.value} Projects`}</span>
        ))}
      </div>
    );
  }

  return null;
}
