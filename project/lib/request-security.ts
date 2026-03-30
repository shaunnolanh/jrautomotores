const attempts = new Map<string, number[]>();

export function checkRateLimit(ip: string, max = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const existing = (attempts.get(ip) || []).filter((t) => now - t < windowMs);
  if (existing.length >= max) return false;
  attempts.set(ip, [...existing, now]);
  return true;
}
