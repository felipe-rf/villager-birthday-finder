export function normalizeBirthday(input: string): string | null {
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

export function formatDateInput(value: string): string {
  // Remove everything except digits
  const digits = value.replace(/\D/g, "").slice(0, 4);

  if (digits.length <= 2) {
    return digits;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}
