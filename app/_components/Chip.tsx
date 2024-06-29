import React from "react";

interface ChipProps {
  label: string;
  isActive: boolean;
}

function Chip({ label, isActive }: ChipProps) {
  if (isActive == true) {
    return (
      <div className="w-fit bg-white p-1 px-3 rounded-full cursor-pointer">
        <h3 className="text-black">{label}</h3>
      </div>
    );
  } else {
    return (
      <div className="w-fit bg-white bg-opacity-20 p-1 px-3 rounded-full cursor-pointer">
        <h3 className="text-white">{label}</h3>
      </div>
    );
  }
}

export default Chip;
