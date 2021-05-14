import styled from 'styled-components'
import { modularScale, rem } from 'polished'
import { ThemeColors } from '../../../library/theme/colors'

export type Level = 1 | 2 | 3 | 4 | 5 | 6
export type Type = keyof ThemeColors['text']

export const Heading = styled.h1<{ level: Level; type: Type }>`
    color: ${({ type, theme }) => theme.colors.text[type]};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ level }) => modularScale(Math.abs(level - 6))};
    letter-spacing: ${rem('0.5px')};
`
