import { createContext, Dispatch, SetStateAction } from 'react'
import Item from '../types/Item'

const LOCAL_STORAGE_KEY = 'hacker_news_bookmarks'

const BookmarkContext = createContext<{
    bookmarks?: Item[]
    getBookmarks?: () => void
    setBookmarks?: (bookmarks: Item[]) => void
}>({})

export const getBookmarks = (
    setBookmarks: Dispatch<SetStateAction<Item[] | undefined>>,
) => {
    const parsedBookmarks = JSON.parse(
        window.localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]',
    )
    const bookmarks: Item[] = Array.isArray(parsedBookmarks)
        ? parsedBookmarks
        : []
    setBookmarks(
        bookmarks.map(({ by, id, text, time, title, type, url }) => ({
            by,
            id,
            text,
            time,
            title,
            type,
            url,
        })),
    )
}

export const setBookmarks = (
    bookmarks: Item[],
    setBookmarks: Dispatch<SetStateAction<Item[] | undefined>>,
) => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookmarks))
    setBookmarks(bookmarks)
}

export default BookmarkContext
