/**
 * Returns the contact email, assembled client-side so it does not appear in initial HTML.
 * Reduces exposure to scrapers that only parse static HTML.
 */
export function getContactEmail(): string {
  const parts = ["Ebiowei", "jnr", "199", "@", "gmail", ".", "com"];
  return parts.join("");
}
