interface NoResultsProps {
  show: boolean;
}

export function NoResults({ show }: NoResultsProps) {
  if (!show) return null;

  return (
    <p className="mt-6 text-lg text-[#4b5f58] text-center">
      No villagers found for this date.
    </p>
  );
}
