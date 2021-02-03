import { FaTrash } from "react-icons/fa";
import { connect } from "react-redux";
import moment from "moment";
import { deleteTransaction } from "../../store/actions/transactionActions";
function TransactionItem({ transaction, deleteTransaction }) {
  return (
    <li className="list-group-item">

      <p >
        <span>{transaction.source} </span>
        <span>{transaction.amount}</span>
        <span style={{ fontSize: '8px',marginLeft:'10px'}}>{moment(`${transaction.date}`, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</span>
      </p>


      <a style={{ cursor: 'pointer' }}
        onClick={() => deleteTransaction(transaction._id, transaction.incomeType)}
        className="col">
        <FaTrash />
      </a>
    </li>

  );
}

export default connect(null, { deleteTransaction })(TransactionItem);