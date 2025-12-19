import { useState } from "react";
import villagers from "./villagers.json";
import { normalizeBirthday } from "./utils";
import type { Villager } from "./types";
import {
  SearchBar,
  ErrorMessage,
  VillagerGrid,
  Footer,
  Header,
  NoResults,
} from "./components";

function App() {
  const [dateInput, setDateInput] = useState("");
  const [results, setResults] = useState<Villager[]>([]);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    setHasSearched(true);
    const normalized = normalizeBirthday(dateInput);

    if (!normalized) {
      setError("Enter a valid date (MM-DD or MM/DD)");
      setResults([]);
      return;
    }

    setError("");
    const found = villagers.filter((v) => v.birthday === normalized);
    setResults(found);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2f7f4] to-[#e6f0ea] flex flex-col items-center text-black">
      <main className="flex-1 max-w-4xl mx-auto px-3 sm:px-4 py-6 sm:py-10 w-full flex flex-col items-center">
        <Header />
        <SearchBar
          dateInput={dateInput}
          setDateInput={setDateInput}
          onSearch={handleSearch}
        />

        {error && <ErrorMessage message={error} />}

        <VillagerGrid villagers={results} />

        <NoResults show={hasSearched && !error && results.length === 0} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
