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

const Story: React.FC<StoryProps> = ({
    by,
    descendants,
    score,
    time,
    title,
    url,
}) => {
    return (
        <S.Container>
            <Heading level={6} style={{ margin: 0 }}>
                {title}
            </Heading>
            <S.Meta>
                <S.Hostname>{!!url && <>{new URL(url).hostname}</>}</S.Hostname>
                <S.Time>
                    {!!time && <>{dayjs().to(dayjs(time * 1000))}</>}
                </S.Time>
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
    )
}

export default Story
