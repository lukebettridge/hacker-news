import { useEffect, useState } from 'react'
import Item from '../../../library/types/Item'

const LOCAL_STORAGE_KEY = 'hacker_news_bookmarks'

export const useStoryLogic = (story?: Item) => {
    const [bookmarked, setBookmarked] = useState(false)

    const fetchBookmarks = (): Item[] => {
        const parsedBookmarks = JSON.parse(
            window.localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]',
        )
        return Array.isArray(parsedBookmarks) ? parsedBookmarks : []
    }

    const toggleBookmark = () => {
        const bookmarks = fetchBookmarks()
        const bookmarked = bookmarks.some(({ id }) => story?.id === id)

        window.localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify(
                bookmarked
                    ? bookmarks.filter(({ id }) => story?.id !== id)
                    : [...bookmarks, story],
            ),
        )
        setBookmarked(!bookmarked)
    }

    useEffect(() => {
        const bookmarks = fetchBookmarks()
        setBookmarked(bookmarks.some(({ id }) => story?.id === id))
    }, [story])

    return { bookmarked, toggleBookmark }
}
