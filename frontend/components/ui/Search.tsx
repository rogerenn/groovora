// components/Search.tsx
import { useState } from "react";

interface SearchProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string;
}

export default function Search({ placeholder = "Search...", onSearch, className = "" }: SearchProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value.trim());
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder={placeholder}
      className={`px-4 py-2 rounded-md bg-gray-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 ${className}`}
    />
  );
}
