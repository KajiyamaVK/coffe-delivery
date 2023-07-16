import 'styled-components'

export const theme = {
  colors: {
    products: {
      'yellow-dark': '#C47F17',
      yellow: '#DBAC2C',
      'yellow-light': '#F1E9C9',
      'purple-dark': '#4B2995',
      purple: '#8047F8',
      'purple-light': '#EBE5F9',
      white: '#FFFFFF',
    },
    base: {
      'base-title': '#272221',
      'base-subtitle': '#403937',
      'base-text': '#574E4D',
      'base-label': '#8D8686',
      'base-hover': '#D7D5D5',
      'base-button': '#E6E5E5',
      'base-input': '#EDEDED',
      'base-card': '#F3F2F2',
      background: '#FAFAFA',
      white: '#FFFFFF',
    },
  },
  'title-font': '"Baloo 2", cursive',
  'text-font': '"Roboto", sans-serif',
}

type Theme = typeof theme
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
