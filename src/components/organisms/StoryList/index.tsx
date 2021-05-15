import FlipMove from 'react-flip-move'
import type Item from '../../../library/types/Item'
import Story from '../../molecules/Story'
import * as S from './styles'

export type StoryListProps = {
    loading?: boolean
    stories: Item[]
}

const StoryList: React.FC<StoryListProps> = ({ loading, stories }) => {
    return (
        <S.Container>
            <FlipMove>
                {stories.map((story) => (
                    <Story key={story.id} story={story} />
                ))}
                {loading &&
                    Array.from({ length: 5 }).map((_, i) => (
                        <Story key={`skeleton-${i}`} loading />
                    ))}
            </FlipMove>
        </S.Container>
    )
}

export default StoryList
