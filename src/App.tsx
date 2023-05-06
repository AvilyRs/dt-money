import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';

import { Transactions } from './pages/Transactions';

import { defaultTheme } from './styles/themes/default';
import { TransactionsContextProvider } from './contexts/TransactionsContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsContextProvider>
        <Transactions />
      </TransactionsContextProvider>
    </ThemeProvider>
  );
}
