import WelcomeFooter from '../layout/welcomeFooter/welcomeFooter';
import WelcomeHeader from '../layout/welcomeHeader/welcomeHeader';
import TextField from '@mui/material/TextField';
import './contactUs.scss'

const ContactUs = () => {
    return (
        <div className="contact">
            <WelcomeHeader/>
            <div className="contact-content">
                <div className="container">
                    <div className="contact-texts">

                    </div>
                </div>
                <div className="contact-form">
                    <form className='form'>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                    </form>
                </div>
            </div>
            <WelcomeFooter/>
        </div>
    )
}

export default ContactUs;