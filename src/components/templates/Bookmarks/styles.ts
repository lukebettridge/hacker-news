import styled from 'styled-components'
import { linearGradient, rem, rgba } from 'polished'
import HeadingAtom from '../../atoms/Heading'

export const Container = styled.div``

export const Empty = styled.p`
    font-weight: 300;
    line-height: 1.5;
    margin: ${rem('40px')} 0;
    opacity: 0.6;
    padding: 0 ${rem('30px')};
    text-align: center;
`

export const Heading = styled(HeadingAtom)`
    margin-bottom: ${rem('10px')};
    padding: 0 ${rem('30px')};
`

export const List = styled.div`
    max-height: calc(75vh - ${rem('148px')});
    overflow-y: auto;
    padding: ${rem('30px')} ${rem('30px')} ${rem('40px')};
`

export const ListWrapper = styled.div`
    position: relative;

    &::before {
        background: ${({ theme }) =>
            linearGradient({
                colorStops: [
                    `${theme.colors.background.secondary} 0%`,
                    `${rgba(theme.colors.background.secondary, 0)} 100%`,
                ],
                toDirection: 'to bottom',
            })};
        content: '';
        height: ${rem('60px')};
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
    }

    &::after {
        background: ${({ theme }) =>
            linearGradient({
                colorStops: [
                    `${theme.colors.background.secondary} 0%`,
                    `${rgba(theme.colors.background.secondary, 0)} 100%`,
                ],
                toDirection: 'to top',
            })};
        bottom: 0;
        content: '';
        height: ${rem('50px')};
        left: 0;
        position: absolute;
        width: 100%;
        z-index: 1;
    }
`
