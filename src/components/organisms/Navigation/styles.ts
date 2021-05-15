import styled, { css } from 'styled-components'
import { linearGradient, rem, rgba } from 'polished'
import { FaHackerNewsSquare } from 'react-icons/fa'
import { HiDotsVertical } from 'react-icons/hi'
import PageContainer from '../../atoms/PageContainer'

export const Container = styled(PageContainer)<{ detached: boolean }>`
    display: flex;
    justify-content: space-between;
    left: 0;
    right: 0;
    top: ${rem('-220px')};
    width: 100%;

    ${({ detached }) =>
        detached &&
        css`
            align-items: center;
            backdrop-filter: blur(${rem('10px')});
            background-color: ${({ theme }) =>
                rgba(theme.colors.background.secondary, 0.97)};
            border: ${rem('1px')} solid ${({ theme }) => theme.colors.border};
            border-radius: ${rem('12px')};
            box-shadow: 0 0 ${rem('30px')} ${rem('-20px')}
                ${({ theme }) => theme.colors.shadow};
            padding: ${rem('20px')} ${rem('30px')};
            position: fixed;
            top: ${rem('40px')};
            transition: top 500ms;
            width: calc(100% - ${rem('26px')});

            &::before {
                background-color: ${({ theme }) =>
                    theme.colors.background.primary};
                content: '';
                height: ${rem('40px')};
                left: 0;
                position: absolute;
                top: ${rem('-41px')};
                width: 100%;
            }

            &::after {
                background: ${({ theme }) =>
                    linearGradient({
                        colorStops: [
                            `${theme.colors.background.primary} 0%`,
                            `${rgba(theme.colors.background.primary, 0)} 100%`,
                        ],
                        toDirection: 'to bottom',
                    })}
                bottom: ${rem('-101px')};
                content: '';
                height: ${rem('100px')};
                left: 0;
                position: absolute;
                width: 100%;
            }

            > div {
                align-items: center;
                display: flex;
                grid-gap: ${rem('22px')};
            }
        `}
`

export const Controls = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Logo = styled(FaHackerNewsSquare)`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 26pt;
`

export const More = styled(HiDotsVertical)`
    align-self: flex-end;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 16pt;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`

export const Signpost = styled.p`
    align-items: center;
    display: flex;
    font-size: 9pt;
    font-weight: 500;
    grid-gap: ${rem('8px')};
    letter-spacing: ${rem('0.75px')};
    margin: 0 0 ${rem('6px')};
    text-transform: uppercase;
`

export const TooltipContainer = styled.div`
    align-self: flex-end;
    position: relative;

    .rpt-container {
        padding-right: 0 !important;

        .rpt-arrow {
            box-shadow: rgb(0 0 0 / 15%) 0px 0px 0px 1px;
        }

        .rpt-textbox-container {
            padding-right: 0 !important;
            right: -10px !important;

            .rpt-shadow-container {
                box-shadow: 0 0 ${rem('30px')} ${rem('-20px')}
                        ${({ theme }) => theme.colors.shadow},
                    rgb(0 0 0 / 10%) 0px 0px 3px,
                    rgb(0 0 0 / 10%) 0px 0px 0px 1px;
                width: 100% !important;
            }

            .rpt-hover {
                > * {
                    &:hover {
                        color: ${({ theme }) =>
                            theme.colors.text.secondary} !important;
                    }
                }
            }
        }
    }
`

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.primary};
    border-bottom: ${rem('1px')} solid ${({ theme }) => theme.colors.border};
    box-shadow: 0 ${rem('1px')} ${rem('2px')}
        ${({ theme }) => theme.colors.shadow};
    margin-bottom: ${rem('10px')};
    min-height: ${rem('218.66px')};
    padding: ${rem('40px')} 0;
    position: relative;
    z-index: 1;
`
