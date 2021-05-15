import { forwardRef } from 'react'
import dayjs from 'dayjs'
import {
    HiBookmark,
    HiOutlineChatAlt2,
    HiOutlineBookmark,
    HiOutlineThumbUp,
} from 'react-icons/hi'
import Skeleton from 'react-loading-skeleton'
import Heading from '../../atoms/Heading'
import Item from '../../../library/types/Item'
import { useStoryLogic } from './logic'
import * as S from './styles'

export type StoryProps = { loading?: boolean; story?: Item }

const Story = forwardRef<HTMLDivElement, StoryProps>(
    ({ loading, story }, ref) => {
        const { by, descendants, rank, score, time, title, url } = story ?? {}
        const { bookmarked, toggleBookmark } = useStoryLogic(story)

        if (!loading) {
            return (
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
                            <S.Bookmark
                                bookmarked={bookmarked}
                                onClick={toggleBookmark}
                            >
                                {bookmarked ? (
                                    <HiBookmark />
                                ) : (
                                    <HiOutlineBookmark />
                                )}
                            </S.Bookmark>
                        </S.Stats>
                    </S.Container>
                </S.Wrapper>
            )
        }

        return (
            <S.Wrapper ref={ref}>
                <S.Rank>
                    <Skeleton />
                </S.Rank>
                <S.Container>
                    <Heading level={6} style={{ margin: 0 }}>
                        <Skeleton style={{ width: '40%' }} />
                    </Heading>
                    <S.Meta>
                        <S.Hostname>
                            <Skeleton width={170} />
                        </S.Hostname>
                        <S.Author>
                            <Skeleton width={50} />
                        </S.Author>
                    </S.Meta>
                    <S.Stats>
                        <Skeleton width={125} />
                        <Skeleton width={15} />
                    </S.Stats>
                </S.Container>
            </S.Wrapper>
        )
    },
)

export default Story
