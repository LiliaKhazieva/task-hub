import s from "./Toggle.module.scss";
import cn from "clsx";

import React, { useState } from "react";

function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={s.toggle}>
      <input
        type="checkbox"
        id="toggle"
        className={s.checkbox}
        checked={isChecked}
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className={s.label}>
        <span className={cn(s.ball, { [s.checked]: isChecked })} />
      </label>
    </div>
  );
}

export default Toggle;
