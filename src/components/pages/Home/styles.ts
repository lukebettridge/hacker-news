import styled from 'styled-components'
import { rem } from 'polished'
import ButtonAtom from '../../atoms/Button'
import PageContainer from '../../atoms/PageContainer'

export const Button = styled(ButtonAtom)`
    align-self: center;
    margin: ${rem('5px')} 0 ${rem('45px')};
`

export const Container = styled(PageContainer)`
    display: flex;
    flex-direction: column;
`

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.primary};
`
