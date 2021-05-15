import { useContext, useEffect } from 'react'
import BookmarkContext from '../../../library/context/bookmark'

export const useBookmarksLogic = () => {
    const { bookmarks, getBookmarks } = useContext(BookmarkContext)

    useEffect(() => {
        getBookmarks?.()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { bookmarks }
}
