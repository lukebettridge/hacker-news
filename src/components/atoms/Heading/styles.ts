import styled from 'styled-components'
import { modularScale, rem } from 'polished'

export type Level = 1 | 2 | 3 | 4 | 5 | 6

export const Heading = styled.h1<{ level: Level }>`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ level }) => modularScale(Math.abs(level - 6))};
    letter-spacing: ${rem('0.5px')};
`
