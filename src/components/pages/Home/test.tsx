import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { theme, ThemeProvider } from '../../../library/theme'
import Item from '../../../library/types/Item'
import Home from './'

const mockStory = (id: number): Item => ({
    by: 'foo',
    id,
    time: 1621279,
    type: 'story',
})

beforeEach(() => {
    jest.resetAllMocks()
})
;[
    { scenario: 'Shows', length: 40 },
    { scenario: 'Hides', length: 5 },
].map(({ scenario, length }) =>
    test(`${scenario} the load more button for ${
        length > 20 ? 'more' : 'less'
    } than 20 stories`, async () => {
        const storyIds = Array.from({ length }).map((_, i) => i)
        const json = jest
            .fn()
            .mockImplementationOnce(() => Promise.resolve(storyIds))
            .mockImplementation(() =>
                Promise.resolve(storyIds.map((id) => mockStory(id))),
            )

        // @ts-ignore
        global.fetch = jest.fn(() => Promise.resolve({ json }))

        render(
            <ThemeProvider theme={theme}>
                <Home />
            </ThemeProvider>,
        )

        waitFor(() => {
            expect(screen.queryAllByText('Load more')).toHaveLength(
                length > 20 ? 1 : 0,
            )
        })
    }),
)
