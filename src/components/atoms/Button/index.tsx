import React from 'react'
import * as S from './styles'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {}

const Button: React.FC<ButtonProps> = (props) => {
    return <S.Button {...props} />
}

export default Button
