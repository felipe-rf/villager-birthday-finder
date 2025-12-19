import type { Villager } from "../types";

interface VillagerCardProps {
  villager: Villager;
}

export function VillagerCard({ villager }: VillagerCardProps) {
  return (
    <a
      href={villager.wiki}
      target="_blank"
      rel="noopener noreferrer"
      className="card bg-white shadow-md hover:shadow-xl transition-all hover:scale-105 w-full sm:w-80 min-w-[16rem] sm:min-w-[18rem] max-w-xs sm:max-w-sm p-4"
    >
      <figure className="overflow-hidden h-48 sm:h-64">
        <img
          src={villager.image}
          alt={villager.name}
          className="w-full h-full object-scale-down rounded-lg"
          loading="lazy"
        />
      </figure>
      <div className="card-body p-4 sm:p-6">
        <h3 className="card-title text-lg sm:text-xl text-[#2f3e3a]">
          {villager.name}
        </h3>
        <p className="text-sm sm:text-base text-[#6fbf9b] font-medium">
          View on Wiki →
        </p>
      </div>
    </a>
  );
}
