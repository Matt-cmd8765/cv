import { useState } from "react";
import PersonalInfo from "./personalinfo";
import Education from "./education";
import WorkExperience from "./work_experience";

const ParentForm = () => {
  const [personalinfodata, setpersonalinfodata] = useState({
    nombre: "",
    email: "",
    phone: "",
  });

  const [educationdata, seteducationdata] = useState({
    school: "",
    major: "",
    start_date: "",
    end_date: "",
  });

  const [workdata, setworkdata] = useState({
    job: "",
    role: "",
    responsibilities: "",
    job_start_date: "",
    job_end_date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Personal Info:", personalinfodata);
    console.log("Education:", educationdata);
    console.log("Work Experience", workdata);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PersonalInfo setpersonalinfodata={setpersonalinfodata} />
      <Education seteducationdata={seteducationdata} />
      <WorkExperience setworkdata={setworkdata} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ParentForm;
