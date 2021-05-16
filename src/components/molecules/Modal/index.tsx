import React, { useEffect } from 'react'
import { HiX } from 'react-icons/hi'
import * as S from './styles'

export type ModalProps = {
    hide: () => void
    visible?: boolean
}

const Modal: React.FC<ModalProps> = ({ children, hide, visible }) => {
    useEffect(() => {
        const body = document.querySelector('body')
        if (body) {
            body.style.overflowY = visible ? 'hidden' : 'auto'
            return () => {
                body.style.overflowY = 'auto'
            }
        }
    }, [visible])

    if (!visible) {
        return null
    }

    return (
        <S.Wrapper>
            <S.Container>
                <S.Close onClick={hide}>
                    <HiX />
                </S.Close>
                {children}
            </S.Container>
            <S.ClickTarget onClick={hide} />
        </S.Wrapper>
    )
}

export default Modal
