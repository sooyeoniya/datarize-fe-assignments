export function formatPriceRange(range: string) {
  const [from, to] = range.split('-').map((v) => Number(v.trim()))

  if (Number.isNaN(from) || Number.isNaN(to)) return range

  return `${from.toLocaleString()} ~ ${to.toLocaleString()}`
}
