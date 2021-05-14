import styled from 'styled-components'
import { rem } from 'polished'

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border: ${rem('1px')} solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text.primary};
    border-radius: ${rem('25px')};
    box-shadow: 0 ${rem('7px')} ${rem('20px')} ${rem('-10px')}
        ${({ theme }) => theme.colors.shadow};
    font-size: 12pt;
    font-weight: 600;
    letter-spacing: ${rem('0.3px')};
    padding: ${rem('13px')} ${rem('25px')};
    transition: background-color 250ms ease-in;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
    }

    &:not(:disabled) {
        &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
            color: #ffffff;
            cursor: pointer;
        }
    }
`
