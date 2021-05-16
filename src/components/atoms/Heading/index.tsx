import React from 'react'
import * as S from './styles'

export type HeadingProps = {
    level?: S.Level
    style?: React.CSSProperties
    type?: S.Type
}

const Heading: React.FC<HeadingProps> = ({ level, type, ...rest }) => {
    return (
        <S.Heading
            as={`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}
            level={level ?? 1}
            type={type ?? 'primary'}
            {...rest}
        />
    )
}

Heading.defaultProps = {
    level: 1,
    type: 'primary',
}

export default Heading
