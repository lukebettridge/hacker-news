import * as S from './styles'

export type HeadingProps = {
    level: S.Level
}

const Heading: React.FC<HeadingProps> = ({ level, ...rest }) => {
    return (
        <S.Heading
            as={`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'}
            level={level}
            {...rest}
        />
    )
}

Heading.defaultProps = {
    level: 1,
}

export default Heading
