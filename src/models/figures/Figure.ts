import { Colors } from "../Colors";
import icon from "../../assets/black-king.png";
import { Cell } from "../Cell";

export enum FigureNames {
  FIGURE = "figure",
  KING = "king",
  KNIGHT = "knight",
  BISHOP = "bishop",
  QUEEN = "queen",
  ROOK = "rook",
  PAWN = "pawn",
}

export class Figure {
  color: Colors;
  icon: typeof icon | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.cell = cell;
    this.color = color;
    this.cell.figure = this;
    this.icon = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random();
  }
  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false;
    if (target.figure?.name === FigureNames.KING) return false;
    return true;
  }
  moveFigure(target: Cell) {}
}
