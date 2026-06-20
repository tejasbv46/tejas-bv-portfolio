import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Android Development Intern</h4>
                <h5>MindMatrix.IO (CL Infotech Pvt. Ltd.), Bengaluru</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Feb 2026 – May 2026. Built Grama-Waste Tracker, an AI-powered
              Android app for rural sanitation with real-time GPS tracking
              via Google Maps API, Firebase Realtime Database, and Google
              Gemini 2.5 Flash for smart waste-management guidance.
              Implemented a bilingual (English/Kannada) UI, FCM push alerts,
              and offline-first sync using Kotlin, Jetpack Compose, and MVVM
              architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech, Computer Science Engineering</h4>
                <h5>Sri Venkateshwara College of Engineering, Bengaluru</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <p>
              CGPA: 7.19. Final-year focus on full-stack MERN development,
              alongside coursework and self-driven projects spanning
              multi-agent AI systems, REST APIs, and Android development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Pre-University</h4>
                <h5>Sri Chaitanya PU College, Bengaluru</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Percentage: 70.01%. Completed pre-university education before
              starting my B.Tech in Computer Science Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;