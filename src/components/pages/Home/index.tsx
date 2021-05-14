import StoryList from '../../organisms/StoryList'
import PageContainer from '../../atoms/PageContainer'
import { useHomeLogic } from './logic'
import * as S from './styles'

const Home: React.FC = () => {
    const { page, stories } = useHomeLogic()

    return (
        <S.Wrapper>
            <PageContainer>
                <StoryList stories={stories} />
            </PageContainer>
        </S.Wrapper>
    )
}

export default Home
