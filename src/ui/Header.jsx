import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-stone-200 bg-yellow-500 uppercase font-pizza">
      <Link
        to="/"
        className=" text-xs font-semibold tracking-wide sm:text-xl sm:tracking-widest ml-6 md:ml-10"
      >
        Instant Pizza Co.
      </Link>
      <SearchOrder />
      <Username/>
    </header>
  );
}
