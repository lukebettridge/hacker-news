import styled from 'styled-components'
import { rem } from 'polished'
import PageContainer from '../../atoms/PageContainer'

export const ClickTarget = styled.div`
    height: 100%;
    width: 100%;
`

export const Close = styled.div`
    cursor: pointer;
    font-size: 16pt;
    position: absolute;
    right: ${rem('22.5px')};
    top: ${rem('27.5px')};
`

export const Container = styled(PageContainer)`
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border: ${rem('1px')} solid ${({ theme }) => theme.colors.border};
    border-radius: ${rem('12px')};
    box-shadow: 0 0 ${rem('30px')} ${rem('-20px')}
        ${({ theme }) => theme.colors.shadow};
    max-height: 75vh;
    padding: ${rem('5px')} 0 ${rem('20px')};
    position: absolute;
    width: calc(100% - ${rem('22px')});
`

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backdrop};
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
`
