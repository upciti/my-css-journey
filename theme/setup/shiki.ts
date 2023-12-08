import { defineShikiSetup } from '@slidev/types';

export default defineShikiSetup(async ({ loadTheme }) => {
  // @ts-ignore
  const theme = await loadTheme(require.resolve('./github-dark.json'));
  return {
    theme: {
      dark: theme,
      light: theme,
    },
  };
});
