import { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { createNew } from "../../store/actions/transactionActions";
function Add({ createNew }) {
    const history = useHistory()
    const [source, setSource] = useState('')
    const [incomeType, setIncomeType] = useState('')
    const [amount, setAmount] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            source,
            incomeType,
            amount,
            description,
            date: `${moment().format('MMMM Do YYYY, h:mm:ss a')}`,
            month: new Date().getMonth()
        }
        createNew(data, history)
    }
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <form className='container' onSubmit={handleSubmit}>
                            <h1 className='lead text-primary text-wrap text-center fs-2'>Add new</h1>
                            <div className='mb-3'>
                                <label
                                    className="form-label">Source</label>
                                <input
                                    spellCheck='false'
                                    className="form-control"
                                    type="text"
                                    placeholder='Source'
                                    value={source}
                                    onChange={e => setSource(e.target.value)} />
                            </div>
                            <div className="row">
                                <div className='mb-3 col-md-6'>
                                    <label
                                        className="form-label">Type</label>
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        defaultValue='select'
                                        onChange={(e) => setIncomeType(e.target.value)}>
                                        <option value="select" disabled>Select Type of money</option>
                                        <option value="income">Income</option>
                                        <option value="expense">Expense</option>
                                        <option value="asset">Asset</option>
                                        <option value="liability">Liability</option>
                                    </select>
                                </div>

                                <div className='mb-3 col-md-6'>
                                    <label
                                        className="form-label">Amount</label>
                                    <input
                                        type='number'
                                        className="form-control"
                                        placeholder='Amount of money'
                                        value={amount}
                                        onChange={e => setAmount(e.target.value)} />
                                </div>
                            </div>
                            <div className='mb-3'>
                                <label
                                    className="form-label">Source</label>

                                <textarea
                                    spellCheck='false'
                                    type="text"
                                    className="form-control"
                                    placeholder='Description...'
                                    value={description}
                                    onChange={e => setDescription(e.target.value)} />
                            </div>



                            <div className="d-grid gap-2">
                                <button
                                    className="btn btn-outline-success block"
                                    type="submit">
                                    Add
                                 </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default connect(null, { createNew })(Add);