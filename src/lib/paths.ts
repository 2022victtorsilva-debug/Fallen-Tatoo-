const prefix = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/') {
  if (path.startsWith('http') || path.startsWith('mailto:') || path.startsWith('tel:')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized === '/' ? `${prefix}/` : `${prefix}${normalized}`;
}
