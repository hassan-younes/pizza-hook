import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/users/Username";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-2  sm:px-6 ">
      <Link className="text-sm tracking-widest" to="/">
        🍕 Pizza Hook
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
