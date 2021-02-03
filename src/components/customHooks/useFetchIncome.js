import { useState, useEffect } from "react";
import request from '../../Axios/request'
const useFetchIncomeExpense = (link) => {
    const [data, setData] = useState({})
    const [money, setMoney] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [err, setErr] = useState(false)
    const dataHolder = { income: [], expense: [], asset: [], liability: [], }
    const moneyHolder =  { income:0, expense:0, asset:0, liability:0, }
    const fetchLinks = async () => {

        try {
            const res = await request.get(link)
            return res.data.data
        } catch (error) {
            setErr(true)
            setIsLoading(false)
        }

    }

    useEffect(() => {
        fetchLinks().then(res => {
            res.forEach(trans => {
                if (trans.incomeType === 'income') {
                    dataHolder.income.push(trans)
                    moneyHolder.income = moneyHolder.income + trans.amount
                }
                if (trans.incomeType === 'expense') {
                    dataHolder.expense.push(trans)
                    moneyHolder.expense = moneyHolder.expense+ trans.amount
                }
                if (trans.incomeType === 'asset') {
                    dataHolder.asset.push(trans)
                    moneyHolder.asset = moneyHolder.asset + trans.amount
                }
                if (trans.incomeType === 'liability') {
                    dataHolder.liability.push(trans)
                    moneyHolder.liability = moneyHolder.liability+ trans.amount
                }

            })
            setData(dataHolder)
            setMoney(moneyHolder)
            setIsLoading(false)
        })
    }, [])


    return { data, isLoading, err,money}

}

export default useFetchIncomeExpense