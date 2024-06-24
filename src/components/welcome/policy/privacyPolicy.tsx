import WelcomeFooter from "../layout/welcomeFooter/welcomeFooter";
import WelcomeHeader from "../layout/welcomeHeader/welcomeHeader";
import "./privacyPolicy.scss";

const PrivacyPolicy = () => {
  return (
    <div className="terms-of-policy">
      <WelcomeHeader />
      <div className="terms-of-policy-content">
        <div className="container">
          <div className="privacy-header-text">
            <h1>Privacy Policy</h1>
          </div>
          <div className="privacy-body-texts">
            <div className="privacy-body">
              <p>1. Introduction</p>
              <p>
                Welcome to Wonk! This Privacy Policy outlines how we collect, use, disclose, and
                protect your personal information when you use our application. By using our
                Service, you consent to the practices described in this Privacy Policy.
              </p>
            </div>
            <div className="privacy-body">
              <p>2. Information We Collect</p>
              <p>
                a. Personal Information: We may collect personal information that you provide
                directly to us, including but not limited to your name, email address, phone number.{" "}
                <br />
                b. User Content: We may collect information, including photos and descriptions, that
                you upload or share on the Service.
                <br />
                C. Usage Information: We collect information about how you use the Service, such as
                your interactions with the application, the conten you view, your search queries,
                and your device information (e.g., device type, operating system, and browser).
                <br />
                d. Location Information: With your consent, we may collect your precise location
                information to provide location-based services.
                <br />
                e. Cookies and Tracking Technologies: We may use cookies and similar tracking
                technologies to collect information about your usage patterns and preferences.
              </p>
            </div>
            <div className="privacy-body">
              <p>3. How We Use Your Informarion</p>
              <p>
                We use the information we collect for various purposes, including: <br />
                a. Providing and improving the Service.
                <br />
                b. Communicating with you, including responding to your inquiries and providing
                updates about the Service.
                <br />
                c. Personalizing your experience and delivering relevant content and advertisements.
                <br />
                d. Analyzing usage patterns and trends to enhance the Service's functionality and
                performance.
                <br />
                e. Detecting and preventing fraud and ensuring the security of your data.
                <br />
              </p>
            </div>
            <div className="privacy-body">
              <p>4. Sharing Your information</p>
              <p>
                We may share your information as follows: <br />
                a. Service Providers: We may share your information with third-party service
                providers who help us deliver and improve the Service.
                <br />
                b. Business Transfers: In the event of a merger, acquisition, or sale of all or part
                of our assets, your information may be transferred as part of the transaction.
                <br />
                c. Legal Compliance: We may disclose your information to comply with legal
                obligations, protect our rights, and respond to lawful requests from public
                authorities.
                <br />
              </p>
            </div>
            <div className="privacy-body">
              <p>5. Your choices</p>
              <p>
                We may share your information as follows: <br />
                a. You can access and update your personal information through your account
                settings.
                <br />
                b. You can opt-out of marketing communications by following the instructions in the
                communication or by contacting us.
                <br />
                c. You can disable cookies through your browser settings.
                <br />
              </p>
            </div>
            <div className="privacy-body">
              <p>6. Data security</p>
              <p>
                We take reasonable measures to protect your information from unauthorized access,
                disclosure, alteration, and destruction. However, no method of data transmission or
                storage is entirely secure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default PrivacyPolicy;
