import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { useTransactions } from '../../hooks/useTransactions';
import { priceFormatter } from '../../utils/formatter';
import { SearchForm } from './components/SearchForm';
import { TableSkeleton } from './components/Skeleton';

import { PriceHighlight, TransactionsContainer, TransactionsTable } from './styles';

export function Transactions() {
  const { transactions, isLoading } = useTransactions();

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <TransactionsTable>
            <tbody>
              {transactions?.map(transaction => (
                <tr key={transaction.id}>
                  <td width='50%'>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </TransactionsTable>
        )}
      </TransactionsContainer>
    </div>
  );
}
