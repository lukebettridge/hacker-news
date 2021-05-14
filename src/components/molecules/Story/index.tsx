import { forwardRef } from 'react'
import dayjs from 'dayjs'
import {
    HiOutlineChatAlt2,
    HiOutlineBookmark,
    HiOutlineThumbUp,
} from 'react-icons/hi'
import Heading from '../../atoms/Heading'
import Item from '../../../library/types/Item'
import * as S from './styles'

export type StoryProps = Item & {}

const Story = forwardRef<HTMLDivElement, StoryProps>(
    ({ by, descendants, rank, score, time, title, url }, ref) => (
        <S.Wrapper ref={ref}>
            {!!rank && <S.Rank>{rank}</S.Rank>}
            <S.Container>
                <a href={url} rel="noreferrer" target="_blank">
                    <Heading level={6} style={{ margin: 0 }}>
                        {title}
                    </Heading>
                </a>
                <S.Meta>
                    <S.Hostname>
                        {!!url && <>{new URL(url).hostname}</>}
                    </S.Hostname>
                    <S.Author>
                        {!!time && (
                            <>
                                {dayjs().to(dayjs(time * 1000))} <br />
                            </>
                        )}
                        by{' '}
                        <a
                            href={`https://news.ycombinator.com/user?id=${by}`}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {by}
                        </a>
                    </S.Author>
                </S.Meta>
                <S.Stats>
                    <div>
                        <S.Score>
                            <HiOutlineThumbUp />
                            {score}
                        </S.Score>
                        <S.Comments>
                            <HiOutlineChatAlt2 />
                            {descendants}
                        </S.Comments>
                    </div>
                    <HiOutlineBookmark />
                </S.Stats>
            </S.Container>
        </S.Wrapper>
    ),
)

export default Story
