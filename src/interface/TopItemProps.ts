import { CryptoType } from "../types/CryptoType";

export interface TopItemProps {
  image: string;
  ath_change_percentage: number;
  market_cap_rank: number;
  ath: string;
  total_supply: number;
  total_volume: number;
  index: number;
  id: string;
  current_price: number;
  market_cap_change_percentage_24h: number;
  favorite: CryptoType[];
}
