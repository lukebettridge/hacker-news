import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
import { ThemeProvider, useTheme } from '../library/theme'
import GlobalStyle from '../library/GlobalStyle'
import Navigation from './organisms/Navigation'
import Home from './pages/Home'

const App: React.FC = () => {
    const { theme } = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <SkeletonTheme
                color={theme.colors.background.secondary}
                highlightColor={theme.colors.background.primary}
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
            </SkeletonTheme>
        </ThemeProvider>
    )
}

export default App
