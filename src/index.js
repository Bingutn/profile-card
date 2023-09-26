import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "HTML", level: "intermediate", color: "#F78CA2" },
  { skill: "CSS", level: "intermediate", color: "#A6FF96" },
  { skill: "JavaScript", level: "intermediate", color: "#ECEE81" },
  { skill: "TypeScript", level: "beginner", color: "#C08261" },
  { skill: "React", level: "beginner", color: "#45FFCA" },
  { skill: "Self learning", level: "advanced", color: "#337CCF" }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img src="scoob.jpg" className="avatar" alt="scooby doo" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Toon KB</h1>
      <p>
        Passionate to become a developer. I'm currently studing more about React
        to recap my knowledge.
      </p>
    </div>
  );
}

function SkillList() {
  const ownSkills = skills;

  return (
    <div className="skill-list">
      {ownSkills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.name}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  const style = { backgroundColor: color };

  return (
    <div className="skill" style={style}>
      <p>{skill}</p>
      <p>
        {level === "beginner" && "💀"}
        {level === "intermediate" && "🤓"}
        {level === "advanced" && "💪"}
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
