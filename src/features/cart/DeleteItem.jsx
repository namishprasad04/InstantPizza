/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({pizzaId}) {
    const dispatch = useDispatch()
    function handleClick() {
        dispatch(deleteItem(pizzaId))
    }
  return (
    <Button type="small" onClick={handleClick}>Delete</Button>
  )
}
