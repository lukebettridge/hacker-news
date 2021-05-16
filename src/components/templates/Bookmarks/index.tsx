import React from 'react'
import FlipMove from 'react-flip-move'
import Story from '../../molecules/Story'
import { useBookmarksLogic } from './logic'
import * as S from './styles'

const Bookmarks: React.FC = () => {
    const { bookmarks } = useBookmarksLogic()

    return (
        <S.Container>
            <S.Heading level={3}>Bookmarks</S.Heading>
            {bookmarks?.length ? (
                <S.ListWrapper>
                    <S.List>
                        <FlipMove>
                            {bookmarks?.map((story) => (
                                <Story
                                    data-testid="story"
                                    key={story.id}
                                    story={story}
                                />
                            ))}
                        </FlipMove>
                    </S.List>
                </S.ListWrapper>
            ) : (
                <S.Empty>
                    It looks like you haven&apos;t bookmarked anything yet.
                </S.Empty>
            )}
        </S.Container>
    )
}

export default Bookmarks
