import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          full-stack developer working primarily in the MERN stack. I enjoy
          building production-grade web applications and AI-integrated
          systems  from REST APIs and React frontends to multi-agent
          pipelines powered by LangGraph. I've also explored Android
          development, building an AI-powered app for rural sanitation
          tracking during my internship at MindMatrix.IO. I like taking
          ideas from concept to shipped product, whether that's a full-stack
          e-commerce platform or a research agent that searches the web and
          writes its own reports.
        </p>
      </div>
    </div>
  );
};

export default About;