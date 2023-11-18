import './notFound.scss'
import { NavLink } from 'react-router-dom';


function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>
                <strong>Page Not Found</strong>
            </p>
            <p>
                <strong>
                    Please check your internet connection and try again or stop play with url
                </strong>
            </p>
            <div className="back-link">
                <NavLink to='/sweet-shop-app'>
                    <p>Go back to main page</p>
                </NavLink>
            </div>
        </div >
    )
}

export default NotFound