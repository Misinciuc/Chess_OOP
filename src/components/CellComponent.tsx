import React, { FC } from "react";
import "../App.css";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell;
  selected: boolean;
  onSelect: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, onSelect }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(" ")}
      onClick={() => onSelect(cell)}
    >
      {cell.isAvailable && !cell.figure && <div className={"available"} />}
      {cell.figure?.icon && <img src={cell.figure.icon} alt="" />}
    </div>
  );
};

export default CellComponent;
