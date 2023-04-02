export function recordsMapUsers(data) {
  return [...new Set(data.map((item) => item.user))];
}
