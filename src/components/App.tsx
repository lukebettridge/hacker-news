import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider, useTheme } from '../library/theme'
import GlobalStyle from '../library/GlobalStyle'
import Home from './pages/Home'

const App: React.FC = () => {
    const { theme } = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
