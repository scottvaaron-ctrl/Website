// Adds the site's base path (/Website/) to an internal link.
// Use url('about/') instead of writing '/about/' by hand.
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}
