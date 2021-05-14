import StoryList from '../../organisms/StoryList'
import { useHomeLogic } from './logic'
import * as S from './styles'

const Home: React.FC = () => {
    const { canLoadMore, loading, loadMore, stories } = useHomeLogic()

    return (
        <S.Wrapper>
            <S.Container>
                <StoryList stories={stories} />
                {canLoadMore && (
                    <S.Button disabled={loading} onClick={loadMore}>
                        Load more
                    </S.Button>
                )}
            </S.Container>
        </S.Wrapper>
    )
}

export default Home
