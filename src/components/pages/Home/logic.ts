import { useEffect, useState } from 'react'
import Item from '../../../library/types/Item'

const PAGE_SIZE = 20

export const useHomeLogic = () => {
    const [page, setPage] = useState<number>(1)
    const [stories, setStories] = useState<Item[]>([])
    const [storyIds, setStoryIds] = useState<number[]>([])

    // Fetch initial story IDs
    useEffect(() => {
        const fetchStoryIds = async () => {
            const res = await fetch(
                'https://hacker-news.firebaseio.com/v0/topstories.json',
            )
            const storyIds = await res.json()
            setStoryIds(storyIds)
        }

        const intervalId = setInterval(() => {
            fetchStoryIds()
        }, 30000)

        fetchStoryIds()

        return () => clearInterval(intervalId)
    }, [])

    // Fetch each story for the set page
    useEffect(() => {
        const fetchStories = async () => {
            if (storyIds.length > 0) {
                const stories = []
                const offset = (page - 1) * PAGE_SIZE
                for (const i in storyIds.slice(offset, offset + PAGE_SIZE)) {
                    const res = await fetch(
                        `https://hacker-news.firebaseio.com/v0/item/${storyIds[i]}.json`,
                    )
                    const story = await res.json()
                    stories.push({
                        ...story,
                        rank: storyIds.indexOf(storyIds[i]) + 1,
                    })
                }
                setStories(stories)
            }
        }
        fetchStories()
    }, [page, storyIds])

    return {
        page,
        stories,
    }
}
