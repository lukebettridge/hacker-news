import StoryList from '../../organisms/StoryList'
import { useHomeLogic } from './logic'
import * as S from './styles'

const Home: React.FC = () => {
    const { canLoadMore, loading, loadingMore, loadMore, stories } =
        useHomeLogic()

    return (
        <S.Wrapper>
            <S.Container>
                <StoryList loading={loadingMore} stories={stories} />
                {canLoadMore && !loadingMore && (
                    <S.Button disabled={loading} onClick={loadMore}>
                        Load more
                    </S.Button>
                )}
            </S.Container>
        </S.Wrapper>
    )
}

export default Home
