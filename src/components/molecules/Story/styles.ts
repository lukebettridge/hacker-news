import styled from 'styled-components'
import { rem } from 'polished'

export const Author = styled.p`
    font-size: 10pt;
    line-height: 1.5;
    text-align: right;

    a {
        color: ${({ theme }) => theme.colors.secondary};

        &:hover {
            text-decoration: underline;
        }
    }
`

export const Comments = styled.div`
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary};
    display: inline-flex;
    grid-gap: ${rem('5px')};
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: ${rem('25px')} 0;
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

export const Rank = styled.p`
    align-items: center;
    align-self: center;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border-radius: 50%;
    box-shadow: 0 ${rem('7px')} ${rem('20px')} ${rem('-10px')}
        ${({ theme }) => theme.colors.shadow};
    display: flex;
    flex-shrink: 0;
    font-weight: 600;
    height: ${rem('45px')};
    justify-content: center;
    transition: background-color 250ms ease-in;
    width: ${rem('45px')};
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

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    grid-gap: ${rem('18px')};

    &:not(:last-child) {
        border-bottom: ${rem('1px')} solid ${({ theme }) => theme.colors.border};
    }

    &:hover {
        ${Rank} {
            background-color: ${({ theme }) => theme.colors.primary};
            color: #ffffff;
        }
    }
`
