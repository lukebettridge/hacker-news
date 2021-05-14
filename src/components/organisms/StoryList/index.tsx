import FlipMove from 'react-flip-move'
import type Item from '../../../library/types/Item'
import Story from '../../molecules/Story'
import * as S from './styles'

export type StoryListProps = {
    stories: Item[]
}

const StoryList: React.FC<StoryListProps> = ({ stories }) => {
    return (
        <S.Container>
            <FlipMove>
                {stories.map((story) => (
                    <Story {...story} key={story.id} />
                ))}
            </FlipMove>
        </S.Container>
    )
}

export default StoryList
