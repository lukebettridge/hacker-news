import * as styledComponents from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { dark, light, ThemeColors } from './colors'

const theme = {
    fonts: {
        primary:
            '-apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif',
    },
}
type Theme = typeof theme & { colors: ThemeColors }

const useTheme = () => {
    const { value: darkModeActive } = useDarkMode()
    return {
        theme: {
            ...theme,
            colors: darkModeActive ? dark : light,
        },
    }
}

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}

const { ThemeProvider } =
    styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>

export { ThemeProvider, useTheme }
