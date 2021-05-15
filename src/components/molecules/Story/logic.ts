import { useContext, useEffect, useState } from 'react'
import BookmarkContext from '../../../library/context/bookmark'
import Item from '../../../library/types/Item'

export const useStoryLogic = (story?: Item) => {
    const [bookmarked, setBookmarked] = useState(false)
    const { bookmarks, getBookmarks, setBookmarks } =
        useContext(BookmarkContext)

    const toggleBookmark = () => {
        if (story) {
            const bookmarked = bookmarks?.some(({ id }) => story.id === id)
            setBookmarks?.(
                bookmarked
                    ? bookmarks?.filter(({ id }) => story.id !== id) ?? []
                    : [...(bookmarks ?? []), story],
            )
            setBookmarked(!bookmarked)
        }
    }

    // Set bookmark status on mount
    useEffect(() => {
        if (!bookmarks) {
            getBookmarks?.()
        }
        setBookmarked(bookmarks?.some(({ id }) => story?.id === id) ?? false)
    }, [bookmarks, getBookmarks, story])

    return { bookmarked, toggleBookmark }
}
