import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import Heading from '../../atoms/Heading'
import * as S from './styles'

const Navigation: React.FC = () => {
    const [detached, setDetached] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setDetached(window.pageYOffset > 200)
        })
    }, [])

    return (
        <S.Wrapper>
            <S.Container detached={detached}>
                <div>
                    <S.Logo />
                    {!detached && (
                        <>
                            <Heading
                                level={5}
                                style={{
                                    fontWeight: 600,
                                    marginBottom: 7.5,
                                    marginTop: 22.5,
                                }}
                                type="secondary"
                            >
                                {dayjs().format('dddd, MMMM D')}
                            </Heading>
                            <Heading level={3} style={{ margin: 0 }}>
                                Top Stories
                            </Heading>
                        </>
                    )}
                </div>
                <S.More />
            </S.Container>
        </S.Wrapper>
    )
}

export default Navigation
