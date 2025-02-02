import { atom } from 'jotai';

export interface TradeItem {
  id: string;
  userId: string;
  itemName: string;
  description: string;
  desiredItems: string[];
  desiredAmount: number;
  desiredPrice: number;
  desiredCurrency: string;
}

export interface TradeOffer {
  id: string;
  listingId: string;
  listingTitle: string;
  offeredItem: string;
  offererId: string;
  status: 'pending' | 'accepted' | 'declined';
}

export const tradeItemsAtom = atom<TradeItem[]>([]);
export const searchQueryAtom = atom<string>('');
export const offersAtom = atom<TradeOffer[]>([]);
