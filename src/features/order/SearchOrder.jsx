import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit} className="mr-10">
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" w-32 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-600 sm:w-full focus:w-40 sm:focus:w-full"
      />
    </form>
  );
}
