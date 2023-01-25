import {DARK_SCHEME_CLASS_NAME, PREFERS_DARK_SCHEME_KEY} from '@/constants/color-scheme';

export const injectColorSchemeScript = `
  const htmlElement = document.querySelector('html');
  const prefersDarkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const persistedPrefersDarkScheme = window.localStorage.getItem('${PREFERS_DARK_SCHEME_KEY}');
  const hasPersistedPrefersDarkScheme = persistedPrefersDarkScheme !== null;
  const prefersDarkScheme = persistedPrefersDarkScheme === 'true';

  if (prefersDarkScheme || (!hasPersistedPrefersDarkScheme && prefersDarkSchemeQuery.matches)) {
    htmlElement.classList.add('${DARK_SCHEME_CLASS_NAME}');
    window.localStorage.setItem('${PREFERS_DARK_SCHEME_KEY}', 'true');
  }
`;
