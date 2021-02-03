import { connect } from "react-redux";
import { useEffect } from "react";
import Summary from "./Summary/Summary";
import Transaction from "./Transactions/Transaction";
import { loadTransactions } from "../store/actions/transactionActions";
import { calculateTotal, showOnly } from "../utils";
function Income_expense({ trans, loadTransactions }) {
    const transactions = trans.transactions
    const types = ['income', 'expense', 'asset', 'liability']
    useEffect(() => {
        loadTransactions()
    }, [])

    return (
        <div className="container-fluid">
            <Summary totalAmounts={calculateTotal(transactions)} />
            {!trans.isLoading
                ?
                <div className="container">
                    <div className="row">
                        {types.map(type => (
                            <div key={type} className="col">
                                <Transaction
                                    name={type}
                                    data={showOnly(transactions[`${type}`])} />
                            </div>

                        ))}
                    </div>
                </div>
                :
                "Loading"}
        </div>
    );
}
const mapStateToProps = (state) => ({
    trans: state.transactions
})
export default connect(mapStateToProps, { loadTransactions })(Income_expense);