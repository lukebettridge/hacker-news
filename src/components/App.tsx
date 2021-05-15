import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ThemeProvider, useTheme } from '../library/theme'
import BookmarkContext, {
    getBookmarks,
    setBookmarks,
} from '../library/context/bookmark'
import Item from '../library/types/Item'
import GlobalStyle from '../library/GlobalStyle'
import Navigation from './organisms/Navigation'
import Home from './pages/Home'

const App: React.FC = () => {
    const { theme } = useTheme()
    const [appBookmarks, setAppBookmarks] = useState<Item[]>()

    return (
        <ThemeProvider theme={theme}>
            <SkeletonTheme
                color={theme.colors.skeleton.background}
                highlightColor={theme.colors.skeleton.highlight}
            >
                <BookmarkContext.Provider
                    value={{
                        bookmarks: appBookmarks,
                        getBookmarks: () => {
                            getBookmarks(setAppBookmarks)
                        },
                        setBookmarks: (bookmarks: Item[]) => {
                            setBookmarks(bookmarks, setAppBookmarks)
                        },
                    }}
                >
                    <GlobalStyle />
                    <Navigation />
                    <Router>
                        <Switch>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                </BookmarkContext.Provider>
            </SkeletonTheme>
        </ThemeProvider>
    )
}

export default App
