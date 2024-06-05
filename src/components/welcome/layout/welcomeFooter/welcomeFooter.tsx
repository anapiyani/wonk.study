import { Link } from 'react-router-dom';
import './welcomeFooter.scss';

const WelcomeFooter = () => {
    return (
        <footer className="welcome-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-left">
                        <Link className='footer-links' to="/">Privacy Policy</Link>
                        <Link className='footer-links' to="/">Terms of Use</Link>
                    </div>
                    <div className="footer-right">
                        <p>Copyright © 2023 Wonk AI | All Rights Reserved </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default WelcomeFooter;