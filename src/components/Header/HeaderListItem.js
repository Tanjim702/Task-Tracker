import { Link } from "react-router-dom";
import { FaMoneyCheck } from "react-icons/fa";
const styles = { height: '80px', color: "burlywood",display:'flex',alignItems:'center',justifyContent:'stretch' }
export function HeaderListItem({ name, linkTo }) {
    return (
        <li className='d-inline-block align-top nav-item'>
            <Link className='nav-link' to={linkTo}>{name}</Link>
        </li>
    );
}

export function HeaderListLogo() {
    return (
        <div>
            <Link
                to='/'
                style={styles}
                className="navbar-brand d-flex justify-content-center align-self-cente">
                <span className='text-center align-middle'>
                    <FaMoneyCheck fontSize='5rem' />
                </span>
                <h2
                    className='mt-2 mx-2 d-inline-block align-top nav-item'>
                    Money Manager
                    </h2>
            </Link>
        </div>
    )
}