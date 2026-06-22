export function slugify(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // retire les accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')    // retire les caractères spéciaux
    .replace(/\s+/g, '-')            // espaces -> tirets
    .replace(/-+/g, '-');            // évite les doubles tirets
}