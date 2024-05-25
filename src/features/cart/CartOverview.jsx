import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity || !totalCartPrice) return null
  return (
    <div className="flex items-center justify-between bg-stone-800 p-4 uppercase text-stone-200">
      <p className="ml-3 space-x-6 font-semibold text-stone-300 md:ml-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>₹{totalCartPrice}</span>
      </p>
      <Link to="/cart" className="mr-8">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
