import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

import { Transactions } from './pages/Transactions';
import { Summary } from './components/Summary';

import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Transactions />
      <Summary />
    </ThemeProvider>
  );
}
