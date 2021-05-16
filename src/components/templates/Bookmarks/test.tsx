import React from 'react'
import { render, screen } from '@testing-library/react'
import { theme, ThemeProvider } from '../../../library/theme'
import BookmarkContext from '../../../library/context/bookmark'
import Bookmarks from './'

test('Renders the correct amount of bookmarks', () => {
    render(
        <ThemeProvider theme={theme}>
            <BookmarkContext.Provider
                value={{
                    bookmarks: Array.from({ length: 5 }).map((_, id) => ({
                        by: 'foo',
                        id,
                        time: 1621279,
                        type: 'story',
                    })),
                }}
            >
                <Bookmarks />
            </BookmarkContext.Provider>
        </ThemeProvider>,
    )
    expect(screen.queryAllByTestId('story')).toHaveLength(5)
    expect(
        screen.queryAllByText(
            "It looks like you haven't bookmarked anything yet.",
        ),
    ).toHaveLength(0)
})

test('Shows the empty state for no bookmarks', () => {
    render(
        <ThemeProvider theme={theme}>
            <BookmarkContext.Provider value={{ bookmarks: [] }}>
                <Bookmarks />
            </BookmarkContext.Provider>
        </ThemeProvider>,
    )
    expect(screen.queryAllByTestId('story')).toHaveLength(0)
    expect(
        screen.queryAllByText(
            "It looks like you haven't bookmarked anything yet.",
        ),
    ).toHaveLength(1)
})
