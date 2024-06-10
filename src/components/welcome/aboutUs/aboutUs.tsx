import WelcomeFooter from "../layout/welcomeFooter/welcomeFooter";
import WelcomeHeader from "../layout/welcomeHeader/welcomeHeader";
import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="about-us">
      <WelcomeHeader />
      <div className="container">
        <div className="about-us-content">
          <div className="header-text">
            <h1>About Wonk</h1>
            <p>
              Wonk AI is an AI-powered educational platform with teacher-curated
              content that enhances learning experience for students.
            </p>
          </div>
          <div className="texts">
            <div className="each-text">
              <p className="each-header-text">Our Vision</p>
              <p className="each-inside-text">
                Our vision is to empower students to unlock their full potential
                and inspire a lifelong love for learning. We envision a world
                where every student can access high-quality education tailored
                to their unique needs and interests.
              </p>
            </div>
            <div className="each-text">
              <p className="each-header-text">
                The Power of Artificial Intelligence
              </p>
              <p className="each-inside-text">
                By integrating AI into our platform, we enable students to
                interact with a virtual assistant, who is available 24/7 to
                answer questions, provide explanations, and offer guidance on a
                wide range of subjects.
              </p>
            </div>
            <div className="each-text">
              <p className="each-header-text">Teacher-Curated Content</p>
              <p className="each-inside-text">
                We understand the irreplaceable value of teachers in the
                learning process. Our platform allows school teachers to upload
                and curate specific content, ensuring that the material aligns
                perfectly with the curriculum and teaching objectives. This
                combination of AI assistance and teacher expertise creates a
                dynamic and highly effective learning environment.
              </p>
            </div>
            <div className="each-text">
              <p className="each-header-text">Thank you for choosing us</p>
              <p className="each-inside-text">
                Together, we can shape the future of education and make learning
                a truly empowering and enjoyable adventure.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WelcomeFooter />
    </div>
  );
};

export default AboutUs;
