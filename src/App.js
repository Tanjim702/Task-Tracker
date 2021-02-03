import Header from "./components/Header/Header";
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import IncomeExpense from "./components/IncomeExpense";
import Login from "./components/user/Login";
import SignUp from "./components/user/SignUp";
import Add from "./components/Add/Add";
import LandingPage from "./components/LandingPage/LandingPage";
import AllTransactions from "./components/AllTransactions/AllTransactions";
function App() {
    return (
        <div className='font-monospace'>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path='/seeMore/:type' component={AllTransactions}/>
                    <Route exact path='/dashboard' component={IncomeExpense} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/addNew' component={Add} />
                    <Route exact path='/' component={LandingPage}/>
                </Switch>

            </BrowserRouter>

        </div>
    );
}

export default App;