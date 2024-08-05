import React, { useState } from "react";

const Select = ({ children, options }) => {
  const [visible, setVisible] = useState(false);

  const onVisible = () => setVisible(!visible);

  return (
    <div className="relative">
      <span onClick={onVisible}>{children}</span>

      {visible && (
        <div className="shadow p-3 absolute top-full bg-white w-48 mt-1 flex flex-col gap-y-2">
          {options.map((it, index) => (
            <div key={index}>{it.label}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
