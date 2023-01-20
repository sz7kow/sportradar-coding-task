export const slugifyId = (id: string): string => id.replaceAll(':', '-');

export const unslugifyId = (id: string): string => id.replaceAll('-', ':');
