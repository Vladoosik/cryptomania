// types
import { CryptoType } from "../types/CryptoType";

export interface DropdownProps {
  item: CryptoType;
  index: number;
  onStarClick?: () => void;
  favorite?: CryptoType[];
  category?: boolean;
}
