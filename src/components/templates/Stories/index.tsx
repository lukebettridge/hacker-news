import React from 'react'
import FlipMove from 'react-flip-move'
import type Item from '../../../library/types/Item'
import Story from '../../molecules/Story'
import * as S from './styles'

export type StoriesProps = {
    loading?: boolean
    stories: Item[]
}

const Stories: React.FC<StoriesProps> = ({ loading, stories }) => {
    return (
        <S.Container>
            <FlipMove>
                {stories.map((story) => (
                    <Story data-testid="story" key={story.id} story={story} />
                ))}
                {loading &&
                    Array.from({ length: 5 }).map((_, i) => (
                        <Story
                            data-testid="skeleton"
                            key={`skeleton-${i}`}
                            loading
                        />
                    ))}
            </FlipMove>
        </S.Container>
    )
}

export default Stories
