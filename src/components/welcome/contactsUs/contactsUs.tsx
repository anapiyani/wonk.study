import WelcomeFooter from '../layout/welcomeFooter/welcomeFooter';
import WelcomeHeader from '../layout/welcomeHeader/welcomeHeader';
import TextField from '@mui/material/TextField';
import './contactUs.scss'
import { Button } from '@mui/material';

const ContactUs = () => {
    return (
        <div className="contact">
            <WelcomeHeader/>
            <div className="contact-content">
                <div className="container">
                    <div className="contact-content-inside">
                        <div className="contact-texts">
                            madlak
                        </div>
                    <div className="contact-form">
                        <form className='form'>
                            <TextField className='inputs' id="outlined-basic" label="Name..." variant="outlined" />
                            <TextField className='inputs' id="outlined-basic" label="Email..." variant="outlined" />
                            <TextField className='message' id="outlined-basic" label="Your message..." variant="outlined" />
                            <Button className='send-button' type='submit' variant='contained'>Send Message</Button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <WelcomeFooter/>
        </div>
    )
}

export default ContactUs;