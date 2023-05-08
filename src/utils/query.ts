export function queryToString(query?: string | string[]) {
  return Array.isArray(query) ? query.join("") : query ?? "";
}
