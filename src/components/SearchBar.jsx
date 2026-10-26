import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrap">
      <Search className="search-icon" size={19} aria-hidden="true" />
      <input
        type="search"
        aria-label="Search contacts by name or email"
        placeholder="Search by name or email..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      {value && (
        <button
          type="button"
          className="clear-search"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}
