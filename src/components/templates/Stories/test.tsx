import React from 'react'
import { render, screen } from '@testing-library/react'
import { theme, ThemeProvider } from '../../../library/theme'
import Stories, { StoriesProps } from './'

test('Renders the correct amount of stories', () => {
    const props: StoriesProps = {
        loading: false,
        stories: Array.from({ length: 10 }).map((_, id) => ({
            by: 'foo',
            id,
            time: 1621279,
            type: 'story',
        })),
    }

    render(
        <ThemeProvider theme={theme}>
            <Stories {...props} />
        </ThemeProvider>,
    )
    expect(screen.queryAllByTestId('story')).toHaveLength(10)
    expect(screen.queryAllByTestId('skeleton')).toHaveLength(0)
})

test('Renders skeleton when loading', () => {
    const props: StoriesProps = {
        loading: true,
        stories: [],
    }

    render(
        <ThemeProvider theme={theme}>
            <Stories {...props} />
        </ThemeProvider>,
    )

    expect(screen.queryAllByTestId('skeleton')).toHaveLength(5)
})
