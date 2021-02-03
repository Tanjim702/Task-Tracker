import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { classifyIntoMonths } from "../../utils";
function AllTransactions({transactions}) {
    
    const trans = classifyIntoMonths(transactions.transactions[`${useParams().type}`])
  return (
    

    <>
    <div>
    {Object.keys(trans).map(item=>(
      <div key={item}>
        <p>{trans[`${item}`].name}</p>
        <ul>
          {trans[`${item}`].trans.map(type=>(
            <li key={type._id}>
              {type.source}
              <small>
                {type.amount}
              </small>
            </li>
          ))}
        </ul>
      </div>
    ))}
    </div>
    </>
  );
}
const mapStateToProps = state=>{
    return {
        transactions:state.transactions
    }
}
export default connect(mapStateToProps)(AllTransactions);