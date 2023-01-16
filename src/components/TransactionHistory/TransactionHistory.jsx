import {
  Table,
  TableHead,
  TableCaption,
  TableBody,
  TableRow,
  TableDataCell,
  TableHeaderCells,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableCaption>Історія транзакцій інтернет-банку</TableCaption>
      <TableHead>
        <TableRow>
          <TableHeaderCells>Type</TableHeaderCells>
          <TableHeaderCells>Amount</TableHeaderCells>
          <TableHeaderCells>Currency</TableHeaderCells>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableDataCell>{type}</TableDataCell>
              <TableDataCell>{amount}</TableDataCell>
              <TableDataCell>{currency}</TableDataCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

// TransactionHistory.propTypes = {
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.number.isRequired,
//   currency: PropTypes.string.isRequired,
// };

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
