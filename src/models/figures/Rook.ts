import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackIcon from "../../assets/black-rook.png";
import whiteIcon from "../../assets/white-rook.png";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = FigureNames.ROOK;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.EmptyVertical(target)) return true;
    if (this.cell.EmptyHorizontal(target)) return true;
    return false;
  }
}
