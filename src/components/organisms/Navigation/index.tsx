import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import useDarkMode from 'use-dark-mode'
import Dot from '../../atoms/Dot'
import Heading from '../../atoms/Heading'
import Tooltip from '../../atoms/Tooltip'
import * as S from './styles'

const Navigation: React.FC = () => {
    const [detached, setDetached] = useState(false)
    const [tooltipVisible, setTooltipVisible] = useState(false)

    const { toggle: toggleDarkMode } = useDarkMode()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setDetached(window.pageYOffset > 228)
        })
    }, [])

    return (
        <S.Wrapper>
            <S.Container
                detached={detached}
                onMouseLeave={() => setTooltipVisible(false)}
            >
                <div>
                    <S.Logo />
                    {!detached && (
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
                    )}
                    <Heading level={detached ? 5 : 3} style={{ margin: 0 }}>
                        {detached && (
                            <S.Signpost>
                                Live <Dot />
                            </S.Signpost>
                        )}
                        Top Stories
                    </Heading>
                </div>
                <S.Controls>
                    <S.TooltipContainer>
                        <S.More
                            onClick={() => setTooltipVisible(!tooltipVisible)}
                        />
                        <Tooltip show={tooltipVisible}>
                            <span
                                onClick={() => {
                                    toggleDarkMode()
                                    setTooltipVisible(false)
                                }}
                            >
                                Toggle Appearance
                            </span>
                            <span
                                onClick={() => {
                                    setTooltipVisible(false)
                                }}
                            >
                                Bookmarks
                            </span>
                        </Tooltip>
                    </S.TooltipContainer>
                    {!detached && (
                        <S.Signpost>
                            Live <Dot />
                        </S.Signpost>
                    )}
                </S.Controls>
            </S.Container>
        </S.Wrapper>
    )
}

export default Navigation
