import { useContextSelector } from 'use-context-selector';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { dateFormatter, priceFormatter } from '../../utils/formatter';
import { SearchForm } from './components/SearchForm';
import { TableSkeleton } from './components/Skeleton';
import { TransactionsContext } from '../../contexts/TransactionsContext';

import { Padder, PriceHighlight, TransactionsContainer, TransactionsTable } from './styles';

export function Transactions() {
  const { transactions, isLoading } = useContextSelector(TransactionsContext, context => {
    const { transactions, isLoading } = context;

    return {
      transactions,
      isLoading
    };
  });

  return (
    <div>
      <Header />
      <Padder>
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
                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                  </tr>
                ))}
              </tbody>
            </TransactionsTable>
          )}
        </TransactionsContainer>
      </Padder>
    </div>
  );
}
