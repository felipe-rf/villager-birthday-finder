import type { Villager } from "../types";
import { VillagerCard } from "./VillagerCard";

interface VillagerGridProps {
  villagers: Villager[];
}

export function VillagerGrid({ villagers }: VillagerGridProps) {
  if (villagers.length === 0) return null;

  return (
    <div className="mt-6 sm:mt-8 w-full flex flex-col items-center px-2">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        {villagers.length} Villager{villagers.length > 1 ? "s" : ""} found 🎉
      </h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl w-full">
        {villagers.map((villager) => (
          <VillagerCard key={villager.name} villager={villager} />
        ))}
      </div>
    </div>
  );
}
