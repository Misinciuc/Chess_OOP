import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import blackIcon from "../../assets/black-knight.png";
import whiteIcon from "../../assets/white-knight.png";

export class Knight extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.icon = color === Colors.BLACK ? blackIcon : whiteIcon;
    this.name = FigureNames.KNIGHT;
  }
  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    return true;
  }
}
