import FlipMove from 'react-flip-move'
import Story from '../../molecules/Story'
import { useBookmarksLogic } from './logic'
import * as S from './styles'

const Bookmarks: React.FC = () => {
    const { bookmarks } = useBookmarksLogic()

    return (
        <S.Container>
            <S.Heading level={3}>Bookmarks</S.Heading>
            <S.ListWrapper>
                <S.List>
                    <FlipMove>
                        {bookmarks?.map((story) => (
                            <Story key={story.id} story={story} />
                        ))}
                    </FlipMove>
                </S.List>
            </S.ListWrapper>
        </S.Container>
    )
}

export default Bookmarks
