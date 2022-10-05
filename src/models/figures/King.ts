import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackIcon from "../../assets/black-king.png";
import whiteIcon from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = FigureNames.KING;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}
