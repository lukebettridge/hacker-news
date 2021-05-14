import styled from 'styled-components'
import { rem } from 'polished'

export const Comments = styled.div`
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary};
    display: inline-flex;
    grid-gap: ${rem('5px')};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${rem('25px')} 0;

    &:not(:last-child) {
        border-bottom: ${rem('1px')} solid ${({ theme }) => theme.colors.border};
    }
`

export const Hostname = styled.p`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 10pt;
    margin: ${rem('10px')} 0;
`

export const Meta = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Score = styled.div`
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    display: inline-flex;
    grid-gap: ${rem('5px')};
    width: ${rem('65px')};
`

export const Stats = styled.div`
    display: flex;
    font-size: 11pt;
    font-weight: 600;
    justify-content: space-between;

    svg {
        font-size: 12pt;
    }
`

export const Time = styled.p`
    font-size: 10pt;
    text-align: right;
`
