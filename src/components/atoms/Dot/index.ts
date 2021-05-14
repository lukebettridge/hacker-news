import styled from 'styled-components'
import { rem, rgba } from 'polished'

const Dot = styled.span`
    height: ${rem('8px')};
    position: relative;
    width: ${rem('8px')};

    &::before {
        animation: pulse 2750ms cubic-bezier(0.215, 1.5, 0.355, 1) infinite;
        background-color: ${({ theme }) => rgba(theme.colors.primary, 0.7)};
        border-radius: ${rem('15px')};
        content: '';
        display: block;
        height: 300%;
        margin-left: -100%;
        margin-top: -100%;
        position: relative;
        width: 300%;
    }

    &::after {
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.33);
        }

        80%,
        100% {
            opacity: 0;
        }
    }
`
export default Dot
