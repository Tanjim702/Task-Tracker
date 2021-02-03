import { HeaderListItem, HeaderListLogo } from "./HeaderListItem"
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/userActions";
function HeaderList({ user,logout }) {
    const history = useHistory()
    return (
        <nav className='navbar'>
            <div className="container-fluid">
                <HeaderListLogo />
                {!user.isAuthenticated
                    ?
                    <div className="float-end">
                        <ul className='d-flex nav me-auto mb-2 mb-lg-0 float-end'>
                            <HeaderListItem name='Login' linkTo='/login' />
                            <HeaderListItem name='Signup' linkTo='/signup' />
                        </ul>
                    </div>
                    :
                    <div className="float-end">
                        <ul className='d-flex nav me-auto mb-2 mb-lg-0 float-end'>
                            <HeaderListItem name='DashBoard' linkTo='/dashboard' />
                            <li onClick={()=>logout(history)}>Logout</li>
                        </ul>
                    </div>

                }
            </div>
        </nav>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps,{logout})(HeaderList);