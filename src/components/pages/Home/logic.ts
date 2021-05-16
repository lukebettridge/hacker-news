import { useEffect, useState } from 'react'
import Item from '../../../library/types/Item'

const PAGE_SIZE = 20

export const useHomeLogic = () => {
    const [loading, setLoading] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [page, setPage] = useState<number>(1)
    const [stories, setStories] = useState<Item[]>([])
    const [storyIds, setStoryIds] = useState<number[]>([])

    // Fetch initial story IDs
    useEffect(() => {
        let isMounted = true

        setLoading(true)
        setLoadingMore(true)
        const fetchStoryIds = async () => {
            fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
                .then((res) => res.json())
                .then((storyIds) => {
                    if (isMounted) {
                        setStoryIds(storyIds)
                    }
                })
        }

        const intervalId = setInterval(() => {
            if (!loading) {
                fetchStoryIds()
            }
        }, 30000)

        fetchStoryIds()

        return () => {
            clearInterval(intervalId)
            isMounted = false
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Fetch each story for the set page
    useEffect(() => {
        let isMounted = true

        const fetchStories = async () => {
            if (storyIds.length > 0) {
                setLoading(true)

                const offset = (page - 1) * PAGE_SIZE
                Promise.all(
                    storyIds
                        .slice(0, offset + PAGE_SIZE)
                        .map((id) =>
                            fetch(
                                `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
                            ).then((res) => res.json()),
                        ),
                ).then((stories) => {
                    if (isMounted) {
                        setStories(
                            stories.map((story) => ({
                                ...story,
                                rank: storyIds.indexOf(story.id) + 1,
                            })),
                        )
                        setLoading(false)
                        setLoadingMore(false)
                    }
                })
            }
        }
        fetchStories()

        return () => {
            isMounted = false
        }
    }, [page, storyIds])

    const loadMore = () => {
        setPage(page + 1)
        setLoadingMore(true)
    }

    return {
        canLoadMore: stories.length > 0 && storyIds.length > stories.length,
        loading,
        loadingMore,
        loadMore,
        page,
        stories,
    }
}
