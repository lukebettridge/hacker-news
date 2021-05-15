import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import useDarkMode from 'use-dark-mode'
import { HiBookmarkAlt, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import Bookmarks from '../../templates/Bookmarks'
import Modal from '../../molecules/Modal'
import Heading from '../../atoms/Heading'
import Dot from '../../atoms/Dot'
import * as S from './styles'

const Navigation: React.FC = () => {
    const [detached, setDetached] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const { toggle: toggleDarkMode, value: darkModeActive } = useDarkMode()

    const handleScroll = () => {
        setDetached(window.pageYOffset > 228)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <S.Wrapper>
                <S.Container detached={detached}>
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
                    <S.End>
                        <S.Controls>
                            <span
                                onClick={() => {
                                    toggleDarkMode()
                                }}
                            >
                                {darkModeActive ? (
                                    <HiOutlineSun />
                                ) : (
                                    <HiOutlineMoon />
                                )}
                            </span>
                            <span
                                onClick={() => {
                                    setModalVisible(true)
                                }}
                            >
                                <HiBookmarkAlt />
                            </span>
                        </S.Controls>
                        {!detached && (
                            <S.Signpost>
                                Live <Dot />
                            </S.Signpost>
                        )}
                    </S.End>
                </S.Container>
            </S.Wrapper>
            <Modal hide={() => setModalVisible(false)} visible={modalVisible}>
                <Bookmarks />
            </Modal>
        </>
    )
}

export default Navigation
