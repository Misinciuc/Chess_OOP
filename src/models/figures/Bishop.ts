import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackIcon from "../../assets/black-bishop.png";
import whiteIcon from "../../assets/white-bishop.png";

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.EmptyDiagonal(target)) return true;
    return false;
  }
}