export type ThemeColors = typeof light

const light = {
    backdrop: 'rgba(0, 0, 0, 0.4)',
    background: {
        primary: 'rgba(248, 250, 252, 1)',
        secondary: 'rgba(255, 255, 255, 1)',
    },
    bookmark: 'rgba(255, 59, 48, 1)',
    border: 'rgba(235, 240, 250, 1)',
    primary: 'rgba(255, 102, 0, 1)',
    secondary: 'rgba(80, 169, 244, 1)',
    shadow: 'rgba(0, 0, 0, 0.05)',
    skeleton: {
        background: 'rgba(232, 237, 240, 1)',
        highlight: 'rgba(245, 245, 248, 1)',
    },
    text: {
        primary: 'rgba(36, 36, 42, 1)',
        secondary: 'rgba(142, 142, 147, 1)',
    },
}

const dark: ThemeColors = {
    backdrop: 'rgba(0, 0, 0, 0.7)',
    background: {
        primary: 'rgba(19, 19, 22, 1)',
        secondary: 'rgba(27, 27, 35, 1)',
    },
    bookmark: 'rgba(255, 69, 58, 1)',
    border: 'rgba(30, 30, 37, 1)',
    primary: 'rgba(255, 102, 0, 1)',
    secondary: 'rgba(80, 169, 244, 1)',
    shadow: 'rgba(255, 255, 255, 0.1)',
    skeleton: {
        background: 'rgba(27, 27, 35, 1)',
        highlight: 'rgba(19, 19, 22, 1)',
    },
    text: {
        primary: 'rgba(252, 252, 254, 1)',
        secondary: 'rgba(142, 142, 147, 1)',
    },
}

export { dark, light }
