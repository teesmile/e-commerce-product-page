import { on } from "events";
import { useState } from "react";

interface Props {
    value: number;
    onChange: (qty: number) => void;
}

export default function QuantitySelector({ value, onChange }: Props) {

  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    onChange(Math.max(0, value - 1)); // Ensure quantity does not go below 0
  };

  return (
    <div className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2 md:w-auto sm:w-full ">
      <button
        onClick={decrement}
        className="cursor-pointer px-2 text-orange-500 font-bold hover:opacity-75 focus-visible:outline-orange-500"
        aria-label="Decrease quantity"
      >
        <img src="/images/icon-minus.svg" alt="" />
      </button>
      <span className="font-semibold">{value}</span>
      <button
        onClick={increment}
        className="cursor-pointer px-2 text-orange-500 font-bold hover:opacity-75 focus-visible:outline-orange-500"
        aria-label="Increase quantity"
      >
        <img src="/images/icon-plus.svg" alt="" />
      </button>
    </div>
  );
}