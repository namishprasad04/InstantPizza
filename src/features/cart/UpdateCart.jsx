/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItems, increaseItems } from "./cartSlice";

export default function UpdateCart({pizzaId, currentQuantity}) {
    const dispatch = useDispatch()
  return (
    <div className="flex gap-1 items-center md:gap-3">
        <Button type="round" onClick={()=> dispatch(decreaseItems(pizzaId))}>-</Button>
        <span className="font-medium text-sm">{currentQuantity}</span>
        <Button type="round" onClick={()=> dispatch(increaseItems(pizzaId))}>+</Button>
    </div>
  )
}
