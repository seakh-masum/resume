import React from "react";

interface ChipListProps {
  data: string[];
}

const ChipList = ({ data }: ChipListProps) => {
  return (
    <ul className="flex flex-row gap-2 flex-wrap mt-2">
      {data.map((item, idx) => (
        <li
          key={idx}
          className="bg-surface px-4 py-2 rounded-3xl text-xs text-text"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ChipList;
