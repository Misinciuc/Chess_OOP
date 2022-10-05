import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackIcon from "../../assets/black-queen.png";
import whiteIcon from "../../assets/white-queen.png";

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.EmptyVertical(target)) return true;
    if (this.cell.EmptyHorizontal(target)) return true;
    if (this.cell.EmptyDiagonal(target)) return true;
    return false;
  }
}
