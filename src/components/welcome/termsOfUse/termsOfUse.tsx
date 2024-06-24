import WelcomeFooter from "../layout/welcomeFooter/welcomeFooter";
import WelcomeHeader from "../layout/welcomeHeader/welcomeHeader";
import "./termsOfUse.scss";

const TermsOfUse = () => {
  return (
    <div className="terms-of-use">
      <WelcomeHeader />
      <div className="terms-of-use-content">
        <div className="container">
          <div className="terms-of-use-header-text">
            <h1>Terms of Use </h1>
          </div>
          <div className="terms-of-use-body-texts">
            <div className="terms-of-use-body">
              <p>1. Introduction</p>
              <p>
                Welcome to Wonk, an educational platform designed to facilitate learning and
                knowledge-sharing. By accessing and using our platform, you agree to abide by the
                following terms and conditions.
              </p>
            </div>
            <div className="terms-of-use-body">
              <p>2. Acceptance of Terms</p>
              <p>
                By accessing or using Wonk, you confirm that you have read, understood, and agreed
                to be bound by these Terms of Service. If you do not agree with any of these terms,
                please do not use our platform.
              </p>
            </div>
            <div className="terms-of-use-body">
              <p>3. Registration and Account Security</p>
              <p>
                Users may be required to register to access certain features. You agree to provide
                accurate information during registration and maintain the security of your password.
              </p>
            </div>
            <div className="terms-of-use-body">
              <p>4. Content and Copyright Policy</p>
              <p>
                All content provided on Wonk is for educational purposes only. Unauthorized
                reproduction, distribution, or modification of any content is strictly prohibited.
                All content remains the property of its respective owners.
              </p>
            </div>
            <div className="terms-of-use-body">
              <p>5. User Conduct</p>
              <p>
                Users are expected to use Wonk in a respectful and constructive manner. Any form of
                harassment, discrimination, or misuse of the platform will result in account
                suspension or termination.
              </p>
            </div>
            <div className="terms-of-use-body">
              <p>6. Disclaimers</p>
              <p>
                Wonk is provided "as is" without any warranties of any kind, either express or
                implied. We do not guarantee the accuracy, completeness, or usefulness of any
                content provided.
              </p>
            </div>
            <div className="terms-of-use-body">
              <p>7. Limitation of Liability</p>
              <p>
                Wonk shall not be liable for any direct, indirect, incidental, or consequential
                damages resulting from the use or inability to use our platform.
              </p>
            </div>
            <div className="terms-of-use-body">
              <p>8. Termination</p>
              <p>
                We reserve the right to terminate or suspend any user's account without prior notice
                for violations of these terms.
              </p>
            </div>
            <div className="terms-of-use-body">
              <p>9. Changes to Terms of Service</p>
              <p>
                Wonk reserves the right to modify these Terms of Service at any time. Users are
                encouraged to review these terms periodically.
              </p>
            </div>
            <div className="terms-of-use-body">
              <p>10. Governing Law</p>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the
                laws of Kazakhstan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default TermsOfUse;
