import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyled } from './styles/global';
import { Router } from './Router';

import { BrowserRouter } from 'react-router-dom';
import { CyclesContextProvider } from './contexts/CyclesContext';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CyclesContextProvider>
                    <Router />
                </CyclesContextProvider>
            </BrowserRouter>
            <GlobalStyled />
        </ThemeProvider>
    );
}

export default App;
