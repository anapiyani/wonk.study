import { Link, NavLink } from 'react-router-dom';
import logotype from '../../../assets/logo_word.svg';
import './welcomePage.scss';

const WelcomePage = () => {
    return (
        <div className="welcome-page">
           <div className="welcome-background">
                <header className="header">
                    <div className="container">
                        <div className="header-items">
                            <div className="logotype">
                                <NavLink to="/"><img src={logotype} alt="wonkAi" /></NavLink>
                            </div>
                            <nav className="navs">
                                <ul>
                                    <li><NavLink className="navLink" to="/">Home</NavLink></li>
                                    <li><NavLink className="navLink" to="/aboutUs">About</NavLink></li>
                                    <li><NavLink className="navLink" to="/contact">Contact</NavLink></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
                <div className="promo">
                    <div className="container">
                        <div className="promo-content">
                            <div className="promo-headers">
                                <h1>Welcome to Wonk AI!🍎</h1>
                                <p>AI powered virual assistant for both teachers and students</p>
                            </div>
                            <div className="sides-choose">
                                <div className="side login">
                                    <div className="side-content">
                                        <div className="side-texts">
                                            <p className='side-header-login'>📚 I am a teacher</p>
                                            <p className='side-texts-login'>Sign up with your school assigned email.</p>
                                        </div>
                                        <div className="buttons">
                                            <button className='signUp'>Sign Up</button>
                                            <button className='signIn'>Log in</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="side download">
                                    <div className="side-content">
                                        <div className="side-texts">
                                            <p className='side-header-download'>🎒 I am a student</p>
                                            <p className='side-content-download'>Sign in with your Student ID and password.</p>
                                        </div>
                                        <div className="buttons">
                                            <button className='download'> Download for iOS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default WelcomePage;