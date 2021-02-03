import TransactionItem from "./TransactionItem";

function TransactionList({ data }) {
  return (
    <ul className='list-group'>
      {data && data.map(transaction => (
        <TransactionItem
          key={transaction._id}
          transaction={transaction}
        />
      ))}
    </ul>
  );
}

export default TransactionList;