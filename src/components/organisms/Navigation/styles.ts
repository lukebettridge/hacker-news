import styled, { css } from 'styled-components'
import { rem } from 'polished'
import { FaHackerNewsSquare } from 'react-icons/fa'
import PageContainer from '../../atoms/PageContainer'

export const Container = styled(PageContainer)<{ detached: boolean }>`
    left: 0;
    right: 0;
    top: ${rem('-220px')};
    width: 100%;

    ${({ detached }) =>
        detached &&
        css`
            background-color: ${({ theme }) =>
                theme.colors.background.secondary};
            border: ${rem('1px')} solid ${({ theme }) => theme.colors.border};
            border-radius: ${rem('12px')};
            box-shadow: 0 0 ${rem('30px')} ${rem('-20px')}
                ${({ theme }) => theme.colors.shadow};
            padding: ${rem('20px')} ${rem('30px')};
            position: fixed;
            top: ${rem('40px')};
            transition: top 500ms;
        `}
`

export const Logo = styled(FaHackerNewsSquare)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 26pt;
`

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.primary};
    border-bottom: ${rem('1px')} solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 ${rem('1px')} ${rem('2px')}
        ${({ theme }) => theme.colors.shadow};
    padding: ${rem('40px')} 0;
    position: relative;
`
