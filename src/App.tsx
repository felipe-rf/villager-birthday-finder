import { useState } from "react";
import villagers from "./villagers.json";
import "./App.css";

interface Villager {
  name: string;
  birthday: string;
  wiki: string;
  image: string;
}

function normalizeBirthday(input: string): string | null {
  // Expect DD/MM or DD-MM
  const match = input.trim().match(/^(\d{2})[\/-](\d{2})$/);
  if (!match) return null;

  let [, day, month] = match;

  if (+month < 1 || +month > 12 || +day < 1 || +day > 31) {
    return null;
  }

  // Convert to MM-DD (dataset format)
  return `${month}-${day}`;
}

function formatDateInput(value: string): string {
  // Remove everything except digits
  const digits = value.replace(/\D/g, "").slice(0, 4);

  if (digits.length <= 2) {
    return digits;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function App() {
  const [dateInput, setDateInput] = useState("");
  const [results, setResults] = useState<Villager[]>([]);
  const [error, setError] = useState("");

  const handleSearch = () => {
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
    <div className="App">
      <h1>Villager Birthday Finder 🎂</h1>
      <p>Enter your birthday (DD-MM or DD/MM)</p>

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
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch}>Find</button>

      {error && <p className="error">{error}</p>}

      {results.length > 0 && (
        <div className="results">
          <h2>
            {results.length} Villager{results.length > 1 && "s"} found 🎉
          </h2>

          <div className="villager-grid">
            {results.map((villager) => (
              <div key={villager.name} className="villager">
                <a
                  href={villager.wiki}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={villager.image}
                    alt={villager.name}
                    width="150"
                    loading="lazy"
                  />
                </a>

                <h3>{villager.name}</h3>

                <a
                  href={villager.wiki}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Wiki
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {dateInput && !error && results.length === 0 && (
        <p>No villagers found for this date.</p>
      )}
      <footer className="footer">
        <p>
          This is a non-commercial <strong>fan project</strong> created for
          educational purposes and is{" "}
          <strong>not affiliated with or endorsed by Nintendo</strong>.
        </p>

        <p>
          Animal Crossing and all related characters, names, and images are ©
          Nintendo.
        </p>

        <p>
          Villager data and images are sourced from the{" "}
          <a
            href="https://animalcrossing.fandom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Animal Crossing Fandom Wiki
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
