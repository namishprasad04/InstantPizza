import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart"
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  function handleClick() {
    dispatch(clearCart());
  }

  if(!cart.length) return <EmptyCart/>
  return (
    <div className="px-4 py-3">
      <LinkButton>
        <Link to="/menu">&larr; Back to menu</Link>
      </LinkButton>

      <h2 className="mt-7 text-xl font-semibold ">
        Your cart, <span className="text-2xl font-bold uppercase">{username}</span>
      </h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b ">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-4">
        {/* <Link to="/order/new">Order pizzas</Link> */}
        <Button to="/order/new" type="primary">
          Order now
        </Button>
        <Button type="secondary" onClick={handleClick}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
