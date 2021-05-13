export type ThemeColors = typeof light

const light = {
    background: 'rgba(248, 250, 252, 1)',
    text: 'rgba(36, 36, 42, 1)',
}

const dark: ThemeColors = {
    background: 'rgba(19, 19, 22, 1)',
    text: 'rgba(252, 252, 254, 1)',
}

export { dark, light }
