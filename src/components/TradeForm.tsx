import { useAtom } from "jotai";
import { TradeItem, tradeItemsAtom } from "../lib/atoms/atoms";
import { useState } from "react";  

export default function TradeForm() {
    const [tradeItems, setTradeItems] = useAtom(tradeItemsAtom);
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [desiredItems, setDesiredItems] = useState("");
    const [desiredAmount, setDesiredAmount] = useState(0);
    const [desiredPrice, setDesiredPrice] = useState(0);
    const [desiredCurrency, setDesiredCurrency] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newItem: TradeItem = {
            id: Date.now().toString(),
            itemName,
            description,
            desiredItems: desiredItems,
            desiredAmount,
            desiredPrice,
            desiredCurrency
        };
    };

    return <div>
        <h1>Trade Form</h1>
    </div>
}