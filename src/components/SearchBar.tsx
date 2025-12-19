import { formatDateInput } from "../utils";

interface SearchBarProps {
  dateInput: string;
  setDateInput: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({
  dateInput,
  setDateInput,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center mb-6 sm:mb-8 w-full px-2">
      <input
        type="text"
        placeholder="DD/MM (e.g. 09/06)"
        value={dateInput}
        onChange={(e) => {
          const formatted = formatDateInput(e.target.value);
          setDateInput(formatted);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        className="input input-bordered input-sm sm:input-lg w-full sm:w-56 bg-white text-black-100"
      />

      <button
        onClick={onSearch}
        className="btn btn-lg bg-[#6fbf9b] hover:bg-[#5aa989] text-white border-none w-full sm:w-auto"
      >
        Find Villagers
      </button>
    </div>
  );
}
