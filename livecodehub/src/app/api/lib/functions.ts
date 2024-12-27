export function generateRandomUsername(name: string) {
  const sufix = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "");
  const end = Math.floor(Math.random() * 1000);
  return `${sufix}_${end}`;
}
