import { atom } from "jotai";

export interface TradeItem {
    id: string
    itemName: string
    description: string
    desiredItems: string[]
    desiredAmount: number
    desiredPrice: number
    desiredCurrency: string
}

export const tradeItemsAtom = atom<TradeItem[]>([]);
export const searchQueryAtom = atom<string>("");